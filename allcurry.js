
function all() {
  let args = [...arguments];
  function childFn() {
    args = [...args, ...arguments];
    if (args.length === 5) {
      const total = args.reduce((sum, val) => sum + val, 0);
      console.log('total: ', total);
      return total;
    } else {
      return childFn;
    }
  };
  return childFn;
}

x = all();
x(1)(2)(3)(4)(5)(6);


