const pairProduct = (numbers, targetProduct) => {
  let c = {}
  for (let i = 0; i < numbers.length; i++) {
    if (c[numbers[i]]) continue;
    const targetNum = parseInt(targetProduct / c[numbers[i]])
    if (c[targetNum] !== undefined) {
      return [i, c[targetNum]]
    } else {
      c[numbers[i]] = i;
    }
  }
};

console.log(pairProduct([3, 2, 5, 4, 1], 8));

module.exports = {
  pairProduct,
};