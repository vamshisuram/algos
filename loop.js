let visited = new Set(['10', '2']);
let obj = { '10': 10, '1': 1, '3': 3, '1000': 1000 };
let arr = ['10', '1', '3', '1000'];

outer:
for (let n in obj) {
  console.log("for..in");
  console.log("n: ", n);
  if (visited.has(n)) {
    // break outer;
  }
  console.log(n)
};

// for (let n of arr) {
//     console.log("for..of");
//     console.log("n: ", n);
//     if (visited.has(n)) {
//         break;
//     }
//     console.log(n)
// };

// for (let i = 0; i < arr.length; i++) {
//     console.log("just for");
//     console.log("n: ", arr[i]);
//     if (visited.has(arr[i])) {
//         break;
//     }
//     console.log(arr[i]);
// }