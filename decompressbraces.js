const decompressBraces = (s) => {
    let currChar = ''
    let currNum = '';
    let out = ''
    for (let i = 0; i < s.length; i++) {
      let c = s[i]
      if (!isNaN(Number(c))) {
        currNum += c;
      }
      if ((c !== '{' && c !== '}') && isNaN(Number(c))) {
        currChar += c;
      }
      if (c === '}' || i === s.length - 1) {
        out += (currChar.repeat(Number(currNum || 1)));
        currChar = ''
        currNum = ''
      }
    }
    
    return out;  
  };

  console.log(decompressBraces("2{q}3{tu}v"));
  console.log(decompressBraces("ch3{ao}"));