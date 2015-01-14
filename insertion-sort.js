// insertion sort

var inputArr = [];
var i, n=20;
for (i = 0; i < n; i++) {
  inputArr.push(Math.floor(Math.random() * 100 + 1));
}

console.log('inputArr: before', inputArr);

var j, k, current, tempK;

for (j=1; j< n; j++) {
  current = inputArr[j];
  tempK = j;
  for (k = j-1; k >= 0; k--) {
    if (inputArr[k] > inputArr[j]) {
      tempK = k;
    }
  }
  
  inputArr.splice(j, 1);
  inputArr.splice(tempK, 0, current);
}

console.log('inputArr: after', inputArr);
