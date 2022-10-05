var lengthOfLastWord = function(s) {
    // const w =  s.split(' ');
    // return w[w.length - 1].length;    // last word need not be a word.. could be spaces.. fix!
    let len = 0;
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] !== " ") {
        len++;
      } else {
        if (len) {
          return len;
        }
      }
    }
    return len;
};

const x = new Date().getMilliseconds();
console.log(lengthOfLastWord("luffy is still joyboy"));
const y = new Date().getMilliseconds();
console.log('y - x: ', y - x);

const x1 = new Date().getMilliseconds();
console.log(lengthOfLastWord("   fly me   to   the moon  "));
const y1 = new Date().getMilliseconds();
console.log('y - x: ', y1 - x1);