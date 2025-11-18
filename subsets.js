function subsets(nums) {

    const result = []
    const curr = []

    function backtrack(start) {

        result.push([...curr])

        for (let i = start; i < nums.length; i++) {
            curr.push(nums[i])
            backtrack(i + 1)
            curr.pop();
        }

    }



    backtrack(0)
    return result;


}

console.log(JSON.stringify(subsets([1,2,3])))