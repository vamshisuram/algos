// arr = [1, 2, 3, 4, 5] sorted.. 
// where is 4?

function binarySearch(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2 );
        if (target === arr[mid]) return mid;
        if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;

}

console.log(binarySearch([1,2,3,4,5,6], 4));








