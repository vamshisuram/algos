
const add = (x) => (y) => x + y;

const add5 = add(5);

console.log(add5(6));


const addn = (n) => {
  let maxArgsCount = n;
  let args = [];
  return () => {
    while (maxArgsCount) {
      let existingLength = args.length;
      let currLength = existingLength + arguments.length;
    }
  };
}

const add5Items = addn(5);
add5Items(1)(2)(3)(4)(5);
add5Items(1,2,3)(4)(5);

