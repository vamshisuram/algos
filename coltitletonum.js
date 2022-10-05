var titleToNumber = function (columnTitle) {
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const vals = {};
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    vals[c] = i + 1;
  }

  const strLen = columnTitle.length;
  let num = 0;
  for (let i = 0; i < strLen; i++) {
    num += (vals[columnTitle[i]] * Math.pow(26, strLen - i - 1));
  }
  return num;

};

columnTitle = "ZY";
columnTitle2 = "AB";

console.log(titleToNumber(columnTitle));
console.log(titleToNumber(columnTitle2));