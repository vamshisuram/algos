// Requirements
const GRID_SIZE = 8;
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

// GRID state
// const grid = []; // 0 - open, 1 - egg, 2 - snake
// for (let i = 0; i < GRID_SIZE; i++) {
//   grid[i] = new Array(GRID_SIZE).fill(0);
// }
// grid[0][0] = 1; // snake

// const state = {
//   grid,
// };

const snake = [[0, 0]];

document.addEventListener("keydown", (event) => {
  if (event.key in DIRECTIONS) {
    direction = DIRECTIONS[event.key];
  }
});

buildGameDOM();
runGame();

let openPositions = [];
// loop i, j gridsize
// if grid - 10x10
// if 0 -- open, 1 -- snake

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
  const head = snake[0];
  const [di, dj] = delta;
  const newHeadPos = [getBoardIndex(head[0] + di), getBoardIndex(head[1] + dj)];
  snake.unshift(newHeadPos);
  addSnakeClass(snake[0][0], snake[0][1]);
  if (isEggCell(newHeadPos[0], newHeadPos[1])) {
    removeEgg(newHeadPos[0], newHeadPos[1]);
    addEgg(); // add new egg
    points++;
  } else {
    const tail = snake.pop();
    removeSnakeClass(tail[0], tail[1]);
  }
}

// function eggOverlapCallback() {
//   const delta = DELTAS[direction];
//   const [di, dj] = delta;
//   const [i, j] = snake[0];
//   if (isEggCell(i, j)) {
//     const [li, lj] = snake[snake.length - 1];
//     const tailIndexes = [getBoardIndex(li - di), getBoardIndex(lj - dj)];
//     snake.push(tailIndexes);
//     addSnakeClass(tailIndexes[0], tailIndexes[1]);
//     removeEgg(i, j);
//     addEgg(); // add new egg
//     points++;
//   }
// }

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
    if (isOver()) {
      clearInterval(tid);
      window.alert("Game Over! \n Points scored: " + points);
    }
  }, 400 / SPEED);
}

function addSnakeClass(i, j) {
  const cell = document.getElementById(`${i},${j}`);
  cell.classList.add("snake");
}

function getRandomIdx(max = GRID_SIZE) {
  return Math.floor(Math.random() * max);
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

function looper(callback) {
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      callback(i, j);
    }
  }
}

function addEgg() {
  // need to ensure that egg doesn't overlap with snake
  // how? - remove the snake nodes from the grid, filter and pick one.
  // each iteration, update map

  // let newOpenSpots = [];
  // const addToOpenSpots = (i, j) => {};
  // looper((i, j) => {
  //   if (grid[i][j] !== 1) {
  //     newOpenSpots.push([i, j]);
  //   }
  // });
  // openPositions = newOpenSpots;

  // // pick one
  // const len = openPositions.length;
  // const randIdx = len > 1 ? Math.floor(Math.random(len)) : 0;
  // const [i, j] = openPositions[randIdx];
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
