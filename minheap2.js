class MinHeap {
    data = [null]
    size() {
        return this.data.length - 1;
    }
    insert(val) {
        // first insert at last index

        // while.. compare with parent index
        // if parentval < childval, ok else flip
        // child index update
        this.data.push(val);

        this.adjust();
    }

    adjust() {
        let cIdx = this.data.length - 1;
        if (cIdx <= 1) return;
        let pIdx = Math.floor(cIdx / 2)

        while (this.data[pIdx] > this.data[cIdx]) {
            [this.data[pIdx], this.data[cIdx]] = [this.data[cIdx], this.data[pIdx]]
            cIdx = pIdx;
            pIdx = Math.floor(cIdx / 2);
        }
    }

    remove() {
        const out = this.data.pop();
        this.adjust();
        return out;
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


