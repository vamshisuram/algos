const tri = (n, memo = {}) => {
  if (n === 0) return 0
  if (n === 1) return 0
  if (n === 2) return 1

  if (memo[n]) return memo[n]
  memo[n] = tri(n-1, memo) + tri(n-2, memo) + tri(n-3, memo)
  return memo[n]
}

x = new Date()
console.log(tri(20));
y = new Date()

console.log(y - x);