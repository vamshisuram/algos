const mostFrequentChar = (s) => {
  // todo
  let map = new Map();
  for (let c of s) {
    let count = map.get(c);
    if (count === undefined) {
      map.set(c, 1);
    } else {
      map.set(c, count + 1);
    }
  }

  let maxCount = 0;
  let mrc = '';
  for (let [k, v] of map) {
    if (v > maxCount) {
      maxCount = v;
      mrc = k;
    }
  }
  return mrc;
};

mostFrequentChar('bookeeper');

module.exports = {
  mostFrequentChar,
};
