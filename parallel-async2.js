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

// for each fn, inject callback to count if all done
// if remaining === 0 trigger overall callback

const asyncParallel = (list, callback) => {
  const res = new Array(list.length)
  let remaining = list.length
  list.forEach((afn, idx) => {
    afn((data) => {
      remaining--;
      res[idx] = data;
      if (!remaining) {
        callback(res.join(", "));
      }
    })
  });
}

x = Date.now()
asyncParallel([asyncFn1, asyncFn2, asyncFn3], (result) => {
  console.log(result); // 1,2,3
  console.log(Date.now() - x);
})



