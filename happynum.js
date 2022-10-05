
const squares = {
  '0': 0,
  '1': 1,
  '2': 4,
  '3': 9,
  '4': 16,
  '5': 25,
  '6': 36,
  '7': 49,
  '8': 64,
  '9': 81,
};

var isHappy = function(n, calDone = {}) {
  if (n === 1) return true;
  if (calDone[n]) {
    return false;
  }
  const str = String(n);
  const newN = Array.prototype.reduce.call(str, (acc, a) => {
    return acc + squares[a];
  }, 0);
  calDone[n] = true;
  return isHappy(newN, calDone);
};

console.log(isHappy(19)); // true
console.log(isHappy(7)); // true
console.log(isHappy(2)); // false
console.log(isHappy(4)); // false


function getDigits(n) {
  if (n <= 9) {
    return [n];
  }
  const digits = [];
  while (n >= 10) {
    const r = n % 10;
    digits.push(r);
    n = parseInt(n / 10);
  }
  digits.push(n);
  return digits;
}

// console.log(
//   getDigits(12345),
//   getDigits(2),
//   getDigits(10),
// );
