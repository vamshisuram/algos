const fib = (n, memo = {}) => {
  if (n === 0) return 0
  if (n === 1) return 1
  if (memo[n]) return memo[n]
  memo[n] = fib(n-1, memo) + fib(n-2, memo)
  return memo[n]
}

x = new Date()
console.log(fib(35));
y = new Date()

console.log(y - x);