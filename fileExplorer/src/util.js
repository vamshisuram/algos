const files = {
  0: {
    id: 0,
    name: "f-zero",
    type: "folder",
    parent: null,
  },
  1: {
    id: 1,
    name: "f-one",
    type: "folder",
    parent: 0,
  },
  2: {
    id: 2,
    name: "two",
    type: "file",
    parent: 1,
  },
  3: {
    id: 3,
    name: "three",
    type: "file",
    parent: 0,
  },
};

let fid;

try {
  for (let k in files) {
    fid = k;
    // - check if children present on parent, and push
    const parentId = files[fid].parent;
    if (parentId !== null) {
      if (files[parentId].children) {
        files[parentId].children.push(fid);
      } else {
        files[parentId].children = [fid];
      }
    } else {
      files[k].children = [];
    }
  }
} catch (e) {
  console.log(fid);
  console.log(e);
}

console.log(files);
