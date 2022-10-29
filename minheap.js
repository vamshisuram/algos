
class MinHeap {
  collection = [null]
  size() {
    return this.collection.length
  }
  insert(val) {
    this.collection.push(val)
    let cIndex = this.size() - 1
    if (cIndex <= 1) return;
    let pIndex = Math.floor(cIndex / 2)

    while (this.collection[cIndex] < this.collection[pIndex]) {
      [this.collection[cIndex], this.collection[pIndex]] = [this.collection[pIndex], this.collection[cIndex]]
      cIndex = pIndex
      pIndex = Math.floor(pIndex / 2)
      if (pIndex < 1) break;
    }
  }
  remove() {
    if (this.collection.length <= 1) return
    this.collection.splice(1, 1)
    this.collection.splice(this.collection.length - 1, 1)
    let c = this.collection
    let i = 1
    let left = 2*i
    let right = 2*i + 1
    while (true) {
      if (right <= c.length - 1 && c[i] > c[right]) {
        [c[right], c[i]] = [c[i], c[right]]
        i = left;
      } else if (left <= c.length - 1 && c[i] > c[left]) {
        [c[left], c[i]] = [c[i], c[left]]
        i = right;
      }

      left = 2 * i
      right = 2 * i + 1

    }
  }
}

let mh = new MinHeap()

// 7 5 6 2 8 9 10 32

mh.insert(7)
mh.insert(5)
mh.insert(6)
mh.insert(2)
mh.insert(8)
mh.insert(9)
mh.insert(10)
mh.insert(32)

mh.remove()
console.log(mh.collection);

mh.remove()
console.log(mh.collection);

mh.remove()
console.log(mh.collection);

