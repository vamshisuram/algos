
const asyncFn = callback => {
  setTimeout(() => {
    // do something - get data
    callback("done")
  }, 2000);
}

asyncFn((message) => {
  console.log(message);
})

// do async stuff and wait for stuff

// we don't know what callback does!! generic fn.
// - we can share
