class MaxHeap {
  data = [null]; // our data points start from 1... i => floor(i/2) parent
  peek() {
    return this.data[1];
  }
  add(val) {
    this.data.push(val);
    this.arrange();
  }
  arrange() {
    let i = this.data.length - 1;
    if (i < 2) return;
    while (i >= 2) {
      let curr = this.data[i];
      let parentIdx = Math.floor(i / 2);
      let parent = this.data[parentIdx];
      if (parent < curr) {
        [this.data[parentIdx], this.data[i]] = [
          this.data[i],
          this.data[parentIdx],
        ];
        i = Math.floor(i / 2);
      } else {
        break;
      }
    }
  }
  toString() {
    const [_, ...data] = this.data;
    return data.join(", ");
  }
}

const maxHeap = new MaxHeap();
maxHeap.add(5);
maxHeap.add(3);
maxHeap.add(10);
maxHeap.add(1);

console.log(maxHeap.toString());
