// https://leetcode.com/problems/pascals-triangle/

const getRow = (n, all) => {
  const index = n - 1;
  if (all[index]) return all[index];

  if (n === 1) {
    all[index] = [1];
    return all[index];
  }

  const arr = new Array(n);
  const prevArr = getRow(n - 1, all);
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) {
      arr[i] = 1;
      continue;
    }
    arr[i] = prevArr[i - 1] + prevArr[i];
  }
  all[index] = arr;

  return all[index];
};

var generate = function (n) {
  const all = new Array(n);
  getRow(n, all);
  return all;
};

const numRows = 5;

console.log(JSON.stringify(generate(numRows)));
