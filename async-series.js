const asyncFn1 = callback => {
  setTimeout(() => {
    // do something - get data
    callback("1")
  }, 2000);
}
const asyncFn2 = callback => {
  setTimeout(() => {
    // do something - get data
    callback("2")
  }, 2000);
}
const asyncFn3 = callback => {
  setTimeout(() => {
    // do something - get data
    callback("3")
  }, 2000);
}

// for each fn, inject callback to increment counter
// to pick next async, save response
// once all done.. exec main callback

const asyncSeries = (list, callback) => {
  const res = new Array(list.length)
  let curr = 0

  const triggerAfn = () => {
    list[curr]((data) => {
      res[curr] = data;
      curr++;
      if (curr < list.length) {
        triggerAfn();
      } else {
        callback(res)
      }
    })
  }
  triggerAfn()
}

x = Date.now()
asyncSeries([asyncFn1, asyncFn2, asyncFn3], (result) => {
  console.log(result); // 1,2,3
  console.log(Date.now() - x);
})




