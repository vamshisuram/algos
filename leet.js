
// var intersection = function (nums1, nums2) {

//   let l1 = nums1.length;
//   let l2 = nums2.length;

//   let smallArr = l1 < l2 ? nums1 : nums2;
//   let bigArr = l1 < l2 ? nums2 : nums1;

//   let common = [];

//   // remove duplicates
//   let instances = {};
//   smallArr.forEach(item => {
//     instances[item] = true;
//   });

//   smallArr = Object.keys(instances).map(key => Number(key));

//   outer:
//   for (let i = 0; i < smallArr.length; i++) {
//     inner:
//     for (let j = 0; j < bigArr.length; j++) {
//       if (smallArr[i] === bigArr[j]) {
//         common.push(smallArr[i]);
//         break inner;
//       }
//     }
//   }

//   return common;

// };

var intersection = function (nums1, nums2) {
  let inst1 = {};
  let inst2 = {};

  nums1.forEach(item => {
    inst1[item] = true;
  })

  nums2.forEach(item => {
    inst2[item] = true;
  })

  let keys1 = Object.keys(inst1);

  let common = [];
  keys1.map(key => {
    if (inst2[key]) {
      common.push(Number(key));
    }
  })

  return common;

};

let res = intersection([1, 2, 2, 1], [2, 2]);

console.log(res);