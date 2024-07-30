function addEgg() {
  // need to ensure that egg doesn't overlap with snake
  // how? - remove the snake nodes from the grid, filter and pick one.
  // each iteration, update map
  // const [i, j] = [getRandomIdx(), getRandomIdx()];
  let newOpenSpots = [];
  const addToOpenSpots = (i, j) => {};
  looper((i, j) => {
    if (grid[i][j] !== 1) {
      newOpenSpots.push([i, j]);
    }
  });
  openPositions = newOpenSpots;

  // pick one
  const len = openPositions.length;
  const randIdx = len > 1 ? Math.floor(Math.random(len)) : 0;
  const [i, j] = openPositions[randIdx];

  const cell = document.getElementById(`${i},${j}`);
  cell.classList.add("egg");
}

function addClassStart() {
  const newElm = document.getElementById(`${snake[0][0]},${snake[0][1]}`);
  newElm.classList.add("snake");
}

function removeClassEnd() {
  const len = snake.length;
  const newElm = document.getElementById(
    `${snake[len - 1][0]},${snake[len - 1][1]}`
  );
  newElm.classList.remove("snake");
}

function addClassEnd() {
  const len = snake.length;
  const newElm = document.getElementById(
    `${snake[len - 1][0]},${snake[len - 1][1]}`
  );
  newElm.classList.add("snake");
}

function updateSnakeClass(i, j, di, dj) {
  const oldElm = document.getElementById(`${i},${j}`);
  oldElm.classList.remove("snake");

  const newElm = document.getElementById(`${i + di},${j + dj}`);
  newElm.classList.add("snake");
}
