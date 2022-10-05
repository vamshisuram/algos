var isPowerOfTwo = function (n) {
  if (n <= 0) return false;

  // const nBinary = n.toString(2);
  // let count = 0;
  // for (let c of nBinary) {
  //   if (count > 1) {
  //     return false;
  //   }
  //   if (c === '1') {
  //     count++;
  //   }
  // }
  // if (count !== 1) {
  //   return false;
  // }
  // return true;

  // let matches = nBinary.match(/1/g);
  // if (!matches || matches.length > 1) {
  //   return false;
  // }
  // return true;

  const val = n & (n - 1);
  return val === 0;
};

console.log(isPowerOfTwo(-16));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(10));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(18));
console.log(isPowerOfTwo(32));