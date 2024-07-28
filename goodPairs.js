var numIdenticalPairs = function(nums) {
    // count instances each

    // then nC2 on each more > 1

    const memo = new Map()

    nums.forEach(val => {
        let count = memo.get(val)
        if (count) {
            memo.set(val, count + 1)
        } else {
            memo.set(val, 1)
        }
    })
    console.log([...memo.entries()])

    let pairs = 0

    for (let [val, count] of memo.entries()) {
        pairs += (count * (count - 1) / 2)
    }
    return pairs;

};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))