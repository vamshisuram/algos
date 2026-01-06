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

    function backtrack(current) {
        // base
        if (current.length === n) {
            result.push(current);
            return;
        }

        for (let i = 0; i < 4; i++) {
            // make choice
            const newchoice = current + '' + i;
            backtrack(newchoice)

            // undo choice
            current = current;
        }
    }

    backtrack('')

    return result;

}

console.log(binaryStrings(2));




console.log(binaryStrings(2)); // _ _ 0/1 00 01 10 11
