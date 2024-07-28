const GRID_SIZE = 10;

const getBoardIndex = (k) => {
  switch (k) {
    case k < GRID_SIZE && k >= 0:
      return k;
    case k <= 0:
      return k + GRID_SIZE;
    default:
      return k - GRID_SIZE;
  }
};

test("getBoardIndex", () => {
  expect(getBoardIndex(1)).toBe(1);
  expect(getBoardIndex(-1)).toBe(9);
  expect(getBoardIndex(10)).toBe(0);
});
