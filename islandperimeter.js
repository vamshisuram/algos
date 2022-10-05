var islandPerimeter = function(grid) {

  const landCells = grid.reduce((acc, item) => {
    return acc + item.reduce((colAcc, val) => colAcc + val, 0);
  }, 0);

  let rowN = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length - 1; j++) {
      if (grid[i][j] === 1 && 1 === grid[i][j+1]) {
        rowN++;
      }
    }
  }

  let colN = 0;
  for (let j = 0; j < grid[0].length; j++) {
    for (let i = 0; i < grid.length - 1; i++) {
      if (grid[i][j] === 1 && 1 === grid[i + 1][j]) {
        colN++;
      }
    }
  }

  console.log(landCells, rowN, colN);

  return landCells * 4 - (rowN + colN) * 2;

};

grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]
]

console.log(islandPerimeter(grid));
console.log(islandPerimeter([[1, 0]]));
console.log(islandPerimeter([[1]]));