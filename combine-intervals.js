const combineIntervals = (intervals) => {
  const sortedInts = intervals.slice().sort((a, b) => a[0] - b[0]);
  console.log(sortedInts);

  const out = [sortedInts[0]];

  if (sortedInts.length > 1) {
    for (let i = 1; i < sortedInts.length; i++) {
      const [start, end] = out[out.length - 1];
      const [currStart, currEnd] = sortedInts[i];

      if (currStart >= start && currStart <= end) {
        const newStart = Math.min(start, currStart);
        const newEnd = Math.max(end, currEnd);
        out[out.length - 1] = [newStart, newEnd];
      } else {
        out.push([currStart, currEnd]);
      }
    }
  }

  return out;
};

const intervals = [
  [3, 7],
  [10, 13],
  [5, 8],
  [27, 31],
  [1, 5],
  [12, 16],
  [20, 32],
];
console.log(combineIntervals(intervals));
