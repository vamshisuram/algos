function gcd(n1, n2) {
  let min = n1 < n2 ? n1 : n2;
  let max = n1 > n2 ? n1 : n2;

  let remainder;
  let divisor = min;
  let dividend = max;

  while (true) {
    remainder = dividend % divisor;
    if (remainder === 0) {
      break;
    } else {
      [divisor, dividend] = [remainder, divisor];
    }
  }
  return divisor;
}

console.log(gcd(10, 24));

var gcdOfStrings = function (str1, str2) {
  const [l1, l2] = [str1.length, str2.length];
  const gcdVal = gcd(l1, l2);
  // pick first
  const common = str1.slice(0, gcdVal);
  const s1 = common.repeat(l1 / gcdVal);
  const s2 = common.repeat(l2 / gcdVal);
  return s1 === str1 || s2 === str2;
};

console.log(gcdOfStrings("ABCABC", "ABC"));
