const m = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const spiralOrder = (matrix) => {
  const vals = [];
  const rows = matrix.length;
  const cols = matrix[0].length;

  let left = 0;
  let right = cols - 1;
  let top = 0;
  let bottom = rows - 1;

  while (vals.length < rows * cols) {
    for (let j = left; j <= right; j++) {
      vals.push(matrix[top][j]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      vals.push(matrix[i][right]);
    }
    right--;

    for (let j = right; j >= left; j--) {
      vals.push(matrix[bottom][j]);
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      vals.push(matrix[i][left]);
    }
    left++;
  }
  console.log(vals);
};

const spiralOrder1 = function (matrix) {
  const result = [];
  const rows = matrix.length;
  const cols = matrix[0].length;

  let left = 0;
  let right = cols - 1;
  let top = 0;
  let bottom = rows - 1;

  while (result.length < rows * cols) {
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }
    top++;

    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--;

    for (let col = right; col >= left; col--) {
      if (result.length < rows * cols) {
        result.push(matrix[bottom][col]);
      }
    }
    bottom--;

    for (let row = bottom; row >= top; row--) {
      if (result.length < rows * cols) {
        result.push(matrix[row][left]);
      }
    }
    left++;
  }
  return result;
};

console.log(spiralOrder(m));
// [1,2,3,6,9,8,7,4,5]
