// merge sort

var inputArr = [];
var i, n=16;
for (i = 0; i < n; i++) {
  inputArr.push(Math.floor(Math.random() * 100 + 1));
}

console.log('inputArr: before', inputArr);

function merge(a, b) {
  var i, j=0, k=0, result = [];
  var l = a.length + b.length;
  
  for (i = 0; i<l; i++) {    
    if (j < a.length && k < b.length) {
      if (a[j] <= b[k]) {
        result[i] = a[j];
        j++;
      } else {
        result[i] = b[k];
        k++;
      }
    } else {
      if (j < a.length) {
        result[i] = a[j];
        j++;
      }
      if (k < b.length) {
        result[i] = b[k];
        k++;
      }
    }  
  }
  return result;
}

function mergeSort(arr) {
  var len = arr.length;
  if (len === 1) {
    return arr;
  }
  var a = arr.splice(0, len/2);
  var b = arr;
  var sortedA = mergeSort(a);
  var sortedB = mergeSort(b);
  return merge(sortedA,sortedB);
}

var outputArr = mergeSort(inputArr);


console.log('inputArr: after', outputArr);
