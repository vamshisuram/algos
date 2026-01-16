/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []

    const curr = []

    function exists(item, all) {
        for (let arr of all) {
            if (arr.sort().join())
        }
    }

    function backtrack(start) {

        if (curr.reduce((a,b) => a + b, 0) > target) {
            return;
        }

        if (curr.reduce((a,b) => a + b, 0) === target) {
            if (!exists(curr)) {
                result.push([...curr])
            }
            return;
        }

        // take or don't take
        for (let i = start; i < candidates.length; i++) {
            curr.push(candidates[i])
            for (let i = 0; i < candidates.length; i++) {
                backtrack(i);
            }
            curr.pop();
        }
    }

    backtrack(0) // start

    return result;

};

console.log(JSON.stringify(combinationSum([2,3,6,7], 7)));