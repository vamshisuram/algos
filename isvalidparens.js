var isValid = function(str) {
    // keep adding to stack
    // when picking next one, check if complement, then pop
    // end if anything left.. not valid
    const s = []
    const comp = {
        ']': '[',
        '}': '{',
        ')': '('
    };
    for (let c of str) {
        if (!s.length) {
            s.push(c);
            continue;
        }
        if (comp[c] === s[s.length - 1]) {
            s.pop();
        } else {
            s.push(c)
        }
    }
    return s.length === 0;
};

console.log(isValid("()"))