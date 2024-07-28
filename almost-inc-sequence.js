// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

function almostIncreasingSequence(sequence) {
  let counter = 0;
  let l = sequence.length;
  for (let i = 1; i < l; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      counter++;
      if (counter > 1) {
        return false;
      }
      if (
        i > 1 &&
        i < l - 1 &&
        sequence[i + 1] <= sequence[i - 1] &&
        sequence[i] <= sequence[i - 2]
      ) {
        return false;
      }
    }
  }
  return true;
}
