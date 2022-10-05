var countBits = function(n) {
    const ans = new Array(n + 1);
    for (let i = 0; i < ans.length; i++) {
        // create binary strings
        const bin = i.toString(2);
        // run regex match global on that string
        const ones = bin.match(/1/g);
        ans[i] = ones ? ones.length : 0;
    }
    return ans;
};