const pairProduct = (numbers, targetProduct) => {
  // todo
  const previous = {};
  for (let i = 0; i < numbers.length; i++) {
    const complement = parseInt(targetProduct / numbers[i] );
    if (previous[complement]) {
      return [previous[complement], i];
    } else {
      previous[numbers[i]] = i;
    }
  }
};

console.log(pairProduct([3, 2, 5, 4, 1], 8));