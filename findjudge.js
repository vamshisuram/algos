var findJudge = function(n, trust) {
  const people = (new Array(n + 1)).fill(0)

  for (let [a, b] of trust) {
    people[a] -= 1;
    people[b] += 1;
  }

  for (let i = 1; i < people.length; i++) {
    if (people[i] === n - 1) {
      return i;
    }
  }
  return -1;
};

n = 2, trust = [[1, 2]]

findJudge(n, trust);