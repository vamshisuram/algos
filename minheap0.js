class MinHeap {
    data = [null]
    size() {return this.data.length - 1}
    peek() {return this.isEmpty() ? null : this.data[1]}
    isEmpty() {return this.size() === 1}
    insert(val) {
        this.data.push(val)
        this.siftUp(this.size())
    }
    remove() {
        if (this.isEmpty()) return null;
        const min = this.data[1]
        const last = this.data.pop();

        if (!this.isEmpty()) {
            this.data[1] = last;
            this.siftDown(1)
        }

        return min;
    }
    siftUp(i) {
        while (i > 1) {
            const parentPos = Math.floor( i / 2)
            if (this.data[i] < this.data[parentPos]) {
                [this.data[parentPos], this.data[i]] = [this.data[i], this.data[parentPos]];
            } else {
                break;
            }
            i = parentPos;
        }
    }
    siftDown(i) {
        // compare with children - swap - update pos to that child - repeat until i === size
        while (i < this.size()) {
            
            const l = i * 2, r = i * 2 + 1;
            if (l > this.size()) return;
            if (r > this.size()) {
                if (this.data[i] < this.data[l]) {
                    break;
                } else {
                    [this.data[i], this.data[l]] = [this.data[l], this.data[i]];
                    i = l;
                }
            } else {
                const smallerChildPos = this.data[l] < this.data[r] ? l : r;
                if (this.data[i] < this.data[smallerChildPos]) {
                    break;
                } else {
                    [this.data[i], this.data[smallerChildPos]] = [this.data[smallerChildPos], this.data[i]];
                    i = smallerChildPos;
                }
            }
        }
    }
}

const h = new MinHeap();
h.insert(5); h.insert(3); h.insert(7); h.insert(1);
console.log(h.peek());      // 1
console.log(h.remove());    // 1
console.log(h.remove());    // 3
console.log("size", h.size());      // 2