
class MinHeap {

    constructor(arr = []) {
        this.data = [null, ...arr]; 

        for (let i = Math.floor(this.size() / 2); i >= 1; i--) {
            this.siftDown(i);
        }
    }

    constructor(comparator = (a, b) => a - b) {
        this.collection = [null]; // 1-based; index 0 unused
        this.compare = comparator; // return <0 if a<b
    }

    size() { return this.collection.length - 1; }
    isEmpty() { return this.size() === 0; }
    peek() { return this.collection[1]; }

    insert(val) {
        this.collection.push(val);
        this._siftUp(this.size());
    }

    remove() {
        if (this.isEmpty()) return undefined;
        const min = this.collection[1];
        const last = this.collection.pop();
        if (!this.isEmpty()) {
            this.collection[1] = last;
            this._siftDown(1);
        }
        return min;
    }

    _siftUp(i) {
        while (i > 1) {
            const p = i / 2; // i >> 1; // parent
            if (this.compare(this.collection[i], this.collection[p]) < 0) {
                [this.collection[i], this.collection[p]] = [this.collection[p], this.collection[i]];
                i = p;
            } else break;
        }
    }

    _siftDown(i) {
        const n = this.size();
        while (true) {
            let smallest = i;
            const l = i * 2, r = l + 1;
            if (l <= n && this.compare(this.collection[l], this.collection[smallest]) < 0) smallest = l;
            if (r <= n && this.compare(this.collection[r], this.collection[smallest]) < 0) smallest = r;
            if (smallest === i) break;
            [this.collection[i], this.collection[smallest]] = [this.collection[smallest], this.collection[i]];
            i = smallest;
        }
    }
}


const h = new MinHeap();
h.insert(5); h.insert(3); h.insert(7); h.insert(1);
console.log(h.peek());      // 1
console.log(h.remove());    // 1
console.log(h.remove());    // 3
console.log(h.size());      // 2


const heap = new MinHeap((a, b) => a[1] - b[1]); // compare by frequency
heap.insert(['x', 5]);
heap.insert(['y', 2]);
heap.insert(['z', 3]);
console.log(heap.remove()); // ['y', 2]


function topKFrequent(nums, k) {
    const freq = new Map();
    for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);

    const heap = new MinHeap((a, b) => a[1] - b[1]);
    for (const [num, count] of freq.entries()) {
        heap.insert([num, count]);
        if (heap.size() > k) heap.remove();
    }

    const res = [];
    while (!heap.isEmpty()) res.push(heap.remove()[0]);
    return res.reverse();
}
