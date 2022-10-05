var convertToTitle = function(columnNumber) {
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let c = columnNumber;

  let cName = '';
  while (c > 26) {
    const r = c % 26;
    if (r === 0) {
      cName = str[str.length - 1] + cName;
      c = Math.floor(c / 26) - 1;
    } else {
      cName = str[(c % 26) - 1] + cName;
      c = Math.floor(c / 26);
    }

  }
  cName = str[c - 1] + cName;

  return cName;
};

console.log(convertToTitle(52)); // ZY
console.log(convertToTitle(28)); // ZY
console.log(convertToTitle(701)); // ZY
console.log(convertToTitle(2147483647)); // "FXSHRXW"