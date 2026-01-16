
function productExceptSelf(nums) {
    // new array ans
    // for every i, product of items before i
    // for every i, prev ans[i] * product of items after i

    const len = nums.length;
    const ans = Array(len).fill(1);

    let leftProd = 1;
    for (let i = 0; i < len; i++) {
        ans[i] = leftProd;
        leftProd *= nums[i];  // for the next i; last one gets ignored auto
    }

    let rightProd = 1;
    for (let i = len - 1; i >= 0; i--) {
        ans[i] *= rightProd;
        rightProd *= nums[i]
    }

    console.log(ans)
    return ans;
}



function productExceptSelf1(nums) {
    const n = nums.length;
    const ans = Array(n).fill(1);

    // 1) Left products
    let leftProd = 1;
    for (let i = 0; i < n; i++) {
        ans[i] = leftProd;      // product of everything left of i
        leftProd *= nums[i];
    }

    // 2) Right products
    let rightProd = 1;
    for (let i = n - 1; i >= 0; i--) {
        ans[i] *= rightProd;    // multiply by product of everything right of i
        rightProd *= nums[i];
    }

    return ans;
}


productExceptSelf([1, 2, 3, 4]);        // [24,12,8,6]
productExceptSelf([0, 1, 2, 3]);        // [6,0,0,0]
productExceptSelf([0, 0, 5]);          // [0,0,0]
productExceptSelf([-1, 1, -1, 1]);      // [ -1, 1, -1, 1 ]
productExceptSelf([2]);              // [1] (nothing left/right)
