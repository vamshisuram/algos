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
