const pairProduct = (numbers, targetProduct) => {
  const idxs = {};

  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];
    if (targetProduct % n === 0) {
      if (n in idxs) {
        return [idxs[n], i];
      } else {
        idxs[compl] = i;
      }
    }
  }

  console.log("idxs", idxs);
};

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
