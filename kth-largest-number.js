

// build minheap of max size k.. overflow, we keep popping the min.. 

// 12345.. 3rd largest..? [3, 4, 5]
// .. the minheap points to the 3rd largest - because we keep popping mins to retain the max

// nums = [7, 10, 4, 3, 20, 15], k = 3
// if it's 3rd smallest - we need max heap.. [7, 3, 4]
// we pop max, to retain the small

// build minHeap(size = k)


const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4;

function kthLargest(nums, k) {

    const h = new MinHeap(k);
    for (let n of nums) {
        h.insert(n)
    }

    return h.peek();

}


// You’re right—1 - based indexing often feels simpler to reason about for heaps(parent = i >> 1, left = 2 * i, right = 2 * i + 1).
// The key gotcha is: never use shift().
// To remove the top, you must swap root with the last element, pop the last, then sift down.
// Below is a clean, robust 1 - based MinHeap in JavaScript with all essentials:


// you should avoid is Array.shift()—it’s O(n) and breaks heap indexing.
// elements order could change, changing parent child relationships. 
// so we always swap ROOT with the last CHILD, and re-arrange.
class MinHeap {
    constructor(k) {
        this.data = [null]
        this.size = k + 1
    }

    insert(val) {
        if (this.data.length > this.size) {
            this.pop();
        }
        this.data.push(val);
        this.siftUp(this.data.length - 1);
    }

    siftUp(childIdx) {
        while (childIdx > 1) {
            let parentIdx = Math.floor(childIdx / 2);
            if (this.data[parentIdx] > this.data[childIdx]) {
                [this.data[parentIdx], this.data[childIdx]] = [this.data[childIdx], this.data[parentIdx]];
                childIdx = parentIdx;
            } else {
                break;
            }
        }
    }

    siftDown(parentIdx) {
        while (parentIdx < this.data.length - 1) {
            let lc = 2 * parentIdx;
            let rc = 2 * parentIdx + 1;
            let childIdx = (this.data[lc] < this.data[rc] ? lc : rc);
            [this.data[parentIdx], this.data[childIdx]] = [this.data[childIdx], this.data[parentIdx]];
            parentIdx = childIdx;
        }
    }

    pop() {
        // this.data.shift(); - breaks heap indexing
        [this.data[1], this.data[this.data.length - 1]] = [this.data[this.data.length - 1], this.data[1]];
        this.data.pop();
        this.siftDown(1);
    }

    peek() {
        if (this.data.length) {
            return this.data[1];
        }
        return null;
    }
}

console.log(kthLargest(nums, k))
