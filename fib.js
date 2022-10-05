const fib = (n, memo = {}) => {
  if (n === 0 || n === 1) return n;

  if (!memo[n]) {
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  }

  return memo[n];
};

console.log(fib(3));
console.log(fib(5));
console.log(fib(20));
console.log(fib(50));
