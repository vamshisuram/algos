/**
 * Computes the intersection of arrays, returning a new array containing unique values present in all given arrays.
 *
 * @param {Array[]} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the unique values present in all given arrays.
 */
function intersection(...arrays) {
  let base = new Set(arrays[0]);
  let next = new Set();
  for (let i = 1; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      const val = arrays[i][j];
      if (base.has(val)) {
        next.add(val);
      }
    }
    console.log("base:", base);
    console.log("next:", next);
    base = next;
    next = new Set();
  }
  return [...base.values()];
}

console.log(intersection([1, 2, 3], [3, 4, 5], [3, 6, 7]));
