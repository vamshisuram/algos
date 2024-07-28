var removeStars = function (s) {
  let temp = s;

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "*") {
      temp = temp.slice(0, i - 1) + temp.slice(i + 1);
      i = i - 2;
    }
  }

  return temp;
};

console.log(removeStars("leet**cod*e"));
