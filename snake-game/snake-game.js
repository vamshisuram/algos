// Requirements
const GRID_SIZE = 5;
const SPEED = 1;
const POINTS_LEVEL = 1; // 1, 3, 5...
let points = 0;
// key to direction name mapping
const DIRECTIONS = {
  ArrowLeft: "LEFT",
  ArrowRight: "RIGHT",
  ArrowUp: "UP",
  ArrowDown: "DOWN",
};
const DELTAS = {
  UP: [-1, 0],
  DOWN: [1, 0],
  RIGHT: [0, 1],
  LEFT: [0, -1],
};
let direction = "DOWN"; // ['UP', 'DOWN', 'RIGHT', 'LEFT']; maybe map it to key event

const snake = [[0, 0]];

let gameStatus = "";

document.addEventListener("keydown", (event) => {
  if (event.key in DIRECTIONS) {
    direction = DIRECTIONS[event.key];
  }
});

buildGameDOM();
runGame();

function buildGameDOM() {
  const rootElm = document.getElementById("root");
  const gridElm = document.createElement("div");
  gridElm.id = "grid";

  let gridHtml = "";
  for (let i = 0; i < GRID_SIZE; i++) {
    gridHtml += `<div id="row-${i}" class="row">`;
    for (let j = 0; j < GRID_SIZE; j++) {
      gridHtml += `<div id="${i},${j}" class="cell"></div>`;
    }
    gridHtml += "</div>";
  }
  gridElm.innerHTML = gridHtml;
  rootElm.appendChild(gridElm);
}

function moveSnake() {
  const delta = DELTAS[direction];
  const prevTail = snake[snake.length - 1];
  for (let k = 0; k < snake.length; k++) {
    const [di, dj] = delta;
    const [i, j] = snake[k];
    const [newI, newJ] = [getBoardIndex(i + di), getBoardIndex(j + dj)];
    snake[k] = [newI, newJ];
  }
  addSnakeClass(snake[0][0], snake[0][1]);
  removeSnakeClass(prevTail[0], prevTail[1]);
}

function eggOverlapCallback() {
  const [i, j] = snake[0];
  if (isEggCell(i, j)) {
    const [li, lj] = snake[snake.length - 1];
    const tailIndexes = [getBoardIndex(li - di), getBoardIndex(lj - dj)];
    snake.push(tailIndexes);
    addSnakeClass(tailIndexes[0], tailIndexes[1]);
    removeEgg(i, j);
    addEgg(); // add new egg
    points++;
  }
}

function runGame() {
  // highlight snake
  // add egg, highlight

  // setInterval - (according to speed)
  // - move snake
  // - after movement - check if head is matching with egg
  // - if matching - add tail+, remove egg, add egg
  // - else - nothing

  addSnakeClass(0, 0);
  addEgg();
  const tid = setInterval(() => {
    moveSnake();
    eggOverlapCallback();
    if (isOver()) {
      clearInterval(tid);
      window.alert("Game Over! \n Points scored: " + points);
    }
  }, 500 / SPEED);
}

function addSnakeClass(i, j) {
  const cell = document.getElementById(`${i},${j}`);
  cell.classList.add("snake");
}

function getRandomIdx() {
  return Math.floor(Math.random() * 10);
}

function isOver() {
  // two same points - head hit body - clear interval - game stop
  if (snake.length === GRID_SIZE * GRID_SIZE) return true;

  const first = snake[0];
  for (let i = 1; i < snake.length; i++) {
    const curr = snake[i];
    if (first[0] === curr[0] && first[1] === curr[1]) {
      return true;
    }
  }
}

function removeEgg(i, j) {
  const cell = document.getElementById(`${i},${j}`);
  cell.classList.remove("egg");
}

function addEgg() {
  const [i, j] = [getRandomIdx(), getRandomIdx()];
  const cell = document.getElementById(`${i},${j}`);
  cell.classList.add("egg");
}

function isEggCell(i, j) {
  const elm = document.getElementById(`${i},${j}`);
  return elm.classList.contains("egg");
}

export const getBoardIndex = (k) => {
  if (k >= 0 && k < GRID_SIZE) {
    return k;
  } else if (k < 0) {
    return k + GRID_SIZE;
  } else {
    return k - GRID_SIZE;
  }
};

function removeSnakeClass(i, j) {
  const elm = document.getElementById(`${i},${j}`);
  elm.classList.remove("snake");
}
