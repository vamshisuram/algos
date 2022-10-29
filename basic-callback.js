
const asyncFn = callback => {
  setTimeout(() => {
    // do something - get data
    callback("done")
  }, 2000);
}

const asyncFnP = callback => {

  const p = new Promise((resolve, rej) => {
    // do something
    // resolve or reject.
    setTimeout(() => {
      resolve("hi")
    }, 5000);
  })

  p.then(callback);
}

asyncFnP((message) => {
  console.log(message);
})

// do async stuff and wait for stuff

// we don't know what callback does!! generic fn.
// - we can share
