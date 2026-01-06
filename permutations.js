function permutations(nums) {
    const result = []
    // we will keep mutating this array.. so we copy
    const curr = []

    function backtrack(curr, rest) {
        // base
        if (curr.length === nums.length) {
            // we copy here..
            result.push([...curr])
            return;
        }
        // make choice
        for (let i = 0; i < rest.length; i++) {
            curr.push(rest[i])
            const rem = [...rest.slice(0, i), ...rest.slice(i+1)]
            backtrack(curr, rem)
            curr.pop()
        }

    }

    backtrack(curr, nums);
    return result;
    
}

console.log(JSON.stringify(permutations([1,2,3])));