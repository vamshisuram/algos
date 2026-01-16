const m2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

function rotate(mat) {
  // for 90 deg clockwise

  // transpose
  // applicable only for square matrixes.. else image potrait.
  const n = mat.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }

  // reverse each row
  for (let row of mat) {
    row.reverse();
  }
  return mat;
}

console.log(rotate(m2));
