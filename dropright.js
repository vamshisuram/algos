function dropRightWhile(array, predicate) {
  const l = array.length;
  let endI;
  for (let i = l - 1; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      endI = i;
      console.log(endI)
      break;
    }
  }
  return array.slice(0, endI + 1);
}

const val = dropRightWhile([1, 2, 3, 4, 5], (value) => value > 3);

console.log(val);