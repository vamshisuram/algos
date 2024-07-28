/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
function flatten(value, out) {
    // if (!(value instanceof Array)) {
    //   out.push(value)
    //   return;
    // }
    // value.forEach(val => flatten(val, out))
    // return out;
  
    // let res = []
    // let copy = value.slice()
  
    // while (copy.length) {
    //   let curr = copy.shift()
    //   if (curr instanceof Array) {
    //     copy.unshift(...curr);
    //   } else {
    //     res.push(curr)
    //   }
    // }
    // return res;
  
    // return value.reduce((acc, item) => {
    //   if (item instanceof Array) {
    //     return acc.concat(flatten(item))
    //   } else {
    //     return acc.concat(item)
    //   }
    // }, [])
  
    // for (let i = 0; i < value.length; ) {
    //   if (value[i] instanceof Array) {
    //     value.splice(i, 1, ...value[i])
    //   } else {
    //     i++;
    //   }
    // }
    // return value;
  
    // if (!out) {
    //   out = value.slice()
    // }
    // while (out.some(i => i.length)) {
    //   out = out.flatMap(i => i.length ? [...i] : i)
    // }
    // return out;
  
  
    // return Array.isArray(value) ? value.flatMap(item => flatten(item)) : value;
  
    // return Array.isArray(value) ? value.flatMap(item => yield* flatten(item)) : value;
  
  
  
    x = JSON.stringify(value)
    console.log(x)
    x = '[' + x.replace(/(\[|\])/g, '') + ']'
    y = JSON.parse(x)

    console.log(y)
    return y;
  
  
  }

flatten([1, [2, 3], [[4], [5, [6]]]])





