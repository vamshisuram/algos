
const getP = () => {
  const p = new Promise((res, rej) => {
    setTimeout(() => {
      res('hello')
    }, 500);
  })
  return p
}

let d =[]

x = Date.now()
responses = []
for (let i = 0; i < 10; i++) {
  i > 0 && d[i-1].then((res) => {
    responses.push(res);
    return getP();
  })
  // d.push(getP())
}
// Promise.all(d).then(() => {
//   console.log(Date.now() - x);
// })

d[0].then(() => {

  console.log(Date.now() - x);
})