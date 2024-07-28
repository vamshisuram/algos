const compress = (s) => {
  let i = 0;
  let j = 0;
  let result = []
  while (j <= s.length) {
    if (s[i] === s[j]) {
      j++;
    } else {
      let count = j - i;
      if (count === 1) {
        result.push(s[i]);
      } else {
        result.push(String(count), s[i])
      }
      i = j;
    }
  }
  return result.join('')
};

// const compress = (s) => {
//   if (!s || s.length === 1) return s;
//   let curr = s[0];
//   let count = 1;
//   let compressed = ''
//   for (let i = 1; i < s.length; i++) {
//     if (s[i] === curr) {
//       count++;
//     } else {
//       let countStr = count === 1 ? '' : String(count)
//       compressed += (countStr + curr);
//       curr = s[i]
//       count = 1;
//     }
//   }
//   let countStr = count === 1 ? '' : String(count)
//   compressed += (countStr + curr);
//   return compressed;
// };

compress('ccaaatsss');