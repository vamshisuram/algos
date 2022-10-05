

function debounce(f, threshold) {
  // save args
  // return fn which executes f after sometime
  let ref;
  let args = [];
  return function() {
    args.push(...arguments)
    if (ref) {
      clearTimeout(ref);
    }
    ref = setTimeout(() => {
      f(args);
    }, threshold);
  }
}

function throttle(f, threshold) {
  let ref;
  let args;
  return function() {
    args = arguments
    if (!ref) {
      ref = setTimeout(() => {
        f(...args)
      }, threshold);
    }
    // I don't care if it got executed then or not
    // It should take timer and execute
  }

}

const deb = (i) => {
  console.log(i);
};

const dd = debounce(deb, 500);
const dt = throttle(deb, 500);

x = Date.now()
for (let i = 0; i < 100; i++) {
  // deb(i);
  dt(i);
}
y = Date.now()
console.log(y - x);



