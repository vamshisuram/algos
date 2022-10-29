const obj1 = {
  name: 'vs',
  profile: {
    name: 'vs',
    age: 20,
  }
}

const obj2 = {
  name: 'vs',
  profile: {
    name: 'vs',
    age: 20,
  }
}

const isDeepEqual = (o1, o2) => {
  // console.log(".... o1... o2 ....", o1, o2);
  if (typeof o1 === "object" && typeof o2 === "object") {
    // checks keys len and compare each key and vals
    const keys1 = Object.keys(o1)
    const keys2 = Object.keys(o2)
    if (keys1.length === keys2.length) {
      keys1.sort((a, b) => a - b)
      keys2.sort((a, b) => a - b)
      for (let i = 0; i < keys1.length; i++) {
        if (keys1[i] !== keys2[i]) {
          return false
        }
      }
      for (let k of keys1) {
        if (!isDeepEqual(o1[k], o2[k])) {
          return false
        }
      }
      return true
    } else {
      return false
    }
  }
  return o1 === o2;
}

x = Date.now()
console.log(isDeepEqual(obj1, obj2));
console.log(Date.now() - x);

x = Date.now()
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
console.log(Date.now() - x);