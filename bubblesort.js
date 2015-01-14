// bubble sort

var inputArr = [];
var i, n=20;
for (i = 0; i < n; i++) {
  inputArr.push(Math.floor(Math.random() * 100 + 1));
}

console.log('inputArr: before', inputArr);

var temp;
function swap(lIndex, rIndex) {
  temp = inputArr[lIndex];
  inputArr[lIndex] = inputArr[rIndex];
  inputArr[rIndex] = temp;
}

var j, k;
for (j=0; j< n; j++) {
  for (k = 0; k<n-1; k++) {
    if (inputArr[k] > inputArr[k+1]) {
      swap(k, k+1);
    }
  }
}

console.log('inputArr: after', inputArr);
