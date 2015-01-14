// selection sort

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

var j, k, min, tempK;
for (j=0; j< n-1; j++) {
  min = inputArr[j];
  tempK = null;
  for (k = j+1; k<n; k++) {
    if (min > inputArr[k]) {
      min = inputArr[k];
      tempK = k;
    }
  }
  if (tempK) {
    swap(j, tempK);    
  }
}

console.log('inputArr: after', inputArr);
