function intersection(...arrays) {
  if (!arrays.length) return [];
  let common = new Set(arrays[0]);
  for (let arr of arrays) {
    if (arr === arrays[0]) continue;
    let nextCommon = new Set();
    for (let item of arr) {
      if (common.has(item)) {
        nextCommon.add(item);
      }
    }
    common = nextCommon;
  }
  return [...common];
}

console.log(intersection(["a", "b", "c"], ["b", "c", "d"], ["c", "e", "f"]));
console.log(intersection([1, 2, 3], [3, 4, 5], [3, 6, 7]));
