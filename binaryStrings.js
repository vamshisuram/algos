function binaryStrings(n) {

    const result = [];

    function backtrack(current) {
        console.log("current", current)

        // Base case: when string reaches desired length
        if (current.length === n) {
            result.push(current)
            return;
        }

        // Two choices: add 0 or 1
        backtrack(current + '0');
        backtrack(current + '1');
    }

    backtrack('');

    return result;

}

console.log(binaryStrings(2));