function curry(func) {
    if (func.length === 0) {
      return func;
    }
  
    // func.length
    let args = []
    let self = this;
    const retFunc = function(arg) {
      args.push(arg)
      if (args.length === func.length) {
        return func.apply(self, args)
      } else {
        return retFunc;
      }
    }
    return retFunc;
  }
  
  function add(a, b) {
    return a + b;
  }
  
  const square = (a) => a * a;
  const curried = curry(square);
    console.log(curried(2));

















