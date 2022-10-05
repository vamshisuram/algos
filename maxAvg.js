/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {

    let sum = 0;
    for (let j = 0; j < k; j++) {
        sum += nums[j];
    }

    if (nums.length === k) {
        return (sum / k);
    }

    let averages = new Map();
    averages.set(0, (sum / k));
    let maxAvg = averages.get(0);

    for (let i = 1; i <= nums.length - k; i++) {
        const avg = (averages.get(i - 1) * k - nums[i - 1] + nums[i + k - 1]) / k;
        averages.set(i, avg);
        maxAvg = maxAvg > avg ? maxAvg : avg;
    }
    return maxAvg;
};

nums = [0, 1, 1, 3, 3]
k = 4
console.log(findMaxAverage(nums, k));

nums = [5]
k = 1
console.log(findMaxAverage(nums, k));
