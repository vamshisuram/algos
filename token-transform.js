const tokenTransform = (source, tokens) => {
  // iterate, find $
  // next pointer $ .. token extract
  // recursive call to that string and return it.
  let i = 0;
  let j = 1;
  let s = source;
  while (i <= s.length - 1) {
    if (s[i] === "$") {
      while (true) {
        if (s[j] === "$") {
          const token = s.slice(i, j + 1);
          console.log("token>>", token);
          const pre = s.slice(0, i) + tokenTransform(tokens[token], tokens);
          s = pre + s.slice(j + 1);
          console.log("s>>", s);
          console.log("i:::>>", i);
          console.log("j:::>>", j);
          i = pre.length;
          j = i + 1;
          break;
        } else {
          j++;
        }
      }
    } else {
      i++;
      j++;
    }
  }
  return s;
};

module.exports = {
  tokenTransform,
};

const tokens = {
  $ADJECTIVE_1$: "quick",
  $ADJECTIVE_2$: "eager",
  $ADVERBS$: "$ADJECTIVE_1$ly and $ADJECTIVE_2$ly",
  $VERB$: "hopped $DIRECTION$",
  $DIRECTION$: "North",
};
console.log(
  tokenTransform("the $ADJECTIVE_1$ fox $ADVERBS$ $VERB$ward", tokens)
);
