
function binaryStrings(n) {

    const result = [];

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





console.log(binaryStrings(2)); // _ _ 0/1 00 01 10 11