function intersection(...arrays) {
  if (arrays.length === 0) return []
  const base = new Set(arrays[0])

  for (let i = 1; i < arrays.length; i++) {
    const arr = arrays[i]
    for (let val of base) {
      if (!arr.includes(val)) {
        base.delete(val)
      }
    }
  }
  return Array.from(base);
}

console.log(
  intersection([1, 2, 3], [3, 4, 5], [3, 6, 7])
)

// const intersection = (a, b) => {
//   const ac = {}
//   const bc = {}

//   for (let n of a) {
//     if (n in ac) {
//       continue
//     } else {
//       ac[n] = 1
//     }
//   }

//   for (let n of b) {
//     if (n in bc) {
//       continue
//     } else {
//       bc[n] = 1
//     }
//   }

//   const res = []
//   for (let n in ac) {
//     if (n in bc) {
//       res.push(n)
//     }
//   }
//   return res;
// };

// intersection([1, 2, 3], [3, 4, 5], [3, 6, 7]) // -> [2,6]


