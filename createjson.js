const createJsonObj = (nestingLimit, attrsNo) => {
  // create 100 attrs in a json at level n
  // nest that into a bigger json n-1
  // nest n-1 into n-2
  // nest n-2 into n-3
  const getObjWithAttrs = () => {
    const obj = {}
    for (let i = 0; i < attrsNo; i++) {
      obj[i] = {
        age: 10,
        name: `vam ${i}`,
        se: true
      }
    }
    return obj
  }

  const parentObj = {}
  for (let i = 0; i < nestingLimit; i++) {
    parentObj[i] = getObjWithAttrs()
  }

  return parentObj;
}

const obj1 = createJsonObj(100, 100)
const obj2 = createJsonObj(100, 100)

x = Date.now()
console.log(Date.now() - x);