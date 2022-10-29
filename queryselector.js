// import lodash from "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.fp.js";

const querySelector = (str) => {

  import("https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.min.js").then((module) => {
    console.log(module.default);
  });

  const a = ['a', 'b', 'c', 'd']
  // const b = lodash.chunk(a, 2);
  // console.log(b);

  return;
/**
  div#main     div.common  div .common .title
  split using spaces
  reverse identifiers

  take root node // div#main .common .title
  find all divs
  traverse and find all .common
  traverse and find all .title
  return those elms



*/

  const root = document.documentElement
  // lets start with simple tag element <br>

  const stack = [root]
  const elms = []

  while (stack.length) {
    let curr = stack.pop()
    console.log(curr);
    if (curr.tagName.toLowerCase() === str) {
      elms.push(curr)
    }
    stack.push(...curr.childNodes)
  }

}

console.log(querySelector('br'));
