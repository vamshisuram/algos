function MinHeap() {
  this.heap = [null];
  this.insert = (n) => {
    const size = this.heap.length;
    if (size > 2) {
    }
  };
  this.remove = () => {};
}

const minHeap = new MinHeap();
for (let n of [20, 19, 13, 15, 8, 5, 11, 9, 17, 10]) {
  minHeap.insert(n);
}

console.log(minHeap.remove()); // 20
console.log(minHeap.remove()); // 19
console.log(minHeap.remove()); // 17
