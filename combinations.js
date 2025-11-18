// n = 4, k = 2

function combinations(n, k) {

    const result = []
    const curr = []

    function backtrack(start) {
        // base
        if (curr.length === k) {
            result.push([...curr])
            return;
        }

        for (let i = start; i <= 4; i++) {
            curr.push(i);
            backtrack(i + 1);
            curr.pop();
        }

    }

    backtrack(1);
    return result;
}

// test
console.log(JSON.stringify(combinations(4, 2)))