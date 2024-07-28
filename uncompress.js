const uncompress = (s) => {
  // extract nums, *chars
  let countStr = '';
  let char = ''
  let extract = ''
  for (let i of s) {
    if (Number(i) === NaN) {
      extract += (i.repeat(Number(countStr)))
      countStr = ''
    } else {
      countStr += i
    }
  }
  return extract;
};

uncompress('2c3a1t');