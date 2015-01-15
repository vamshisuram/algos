// quick sort (in progress)

var input = [];
var i, n=16;
for (i = 0; i < n; i++) {
  input.push(Math.floor(Math.random() * 100 + 1));
}

console.log('input: before', input);

function swap(i1, i2, inputArr) {
  var temp;
  temp = inputArr[i1];
  inputArr[i1] = inputArr[i2];
  inputArr[i2] = temp;
  return inputArr;
}


// pivotIndex, wallIndex, currentIndex

function quickSort(inputArr) {
  var len = inputArr.length;
  
  if (len === 1) {
    return inputArr;
  }
  
  var k, pivotIndex, wallIndex, currentIndex;
  
  wallIndex = 0;
  pivotIndex = len-1;

  for (k = 0; k < len-1; k++) {
    currentIndex = k;
    if (inputArr[currentIndex] <= inputArr[pivotIndex]) {
      if (len > 2) {
        inputArr = swap(wallIndex, currentIndex, inputArr);
        wallIndex++;        
      } else {
        return inputArr;
      }      
    }
  }
  inputArr = swap(len-1, wallIndex, inputArr);
  
  var sortedLeft = quickSort(inputArr.splice(0, wallIndex));
  var elem = inputArr.splice(0, 1);
  var sortedRight = quickSort(inputArr);
  
  var output = sortedLeft.concat(elem, sortedRight);
  
  return output;
}

var outputArr = quickSort(input);

console.log('inputArr: after', outputArr);
