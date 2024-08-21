export default function deepMerge(valA, valB) {
  // obj.keys - iterate and add
  // if any val is obj, again iterate
  if (valA === undefined || valB === undefined) {
    return valA || valB;
  }

  if (typeof valA === "string" && typeof valB === "string") {
    return valB;
  }

  if (typeof valA === "boolean" && typeof valB === "boolean") {
    return valB;
  }

  if (typeof valA === "number" && typeof valB === "number") {
    return valB;
  }

  if (Array.isArray(valA) && Array.isArray(valB)) {
    return [...valA, ...valB];
  }

  if (typeof valA === "object" && typeof valB === "object") {
    const obj = {};
    const k1list = Object.keys(valA);
    const k2list = Object.keys(valB);
    const kSet = new Set([...k1list, ...k2list]);
    for (let k of kSet) {
      obj[k] = deepMerge(valA[k], valB[k]);
    }
    return obj;
  }
}

// console.log(deepMerge({ foo: 2, bar: 3 }, { qux: 4 }));
console.log(deepMerge({ foo: 3, bar: [7, 5] }, { bar: [1, 2, 3], qux: 1 }));
console.log(deepMerge({ foo: 3, bar: [7, 5] }, { bar: [1, 2, 3], qux: 1 }));
