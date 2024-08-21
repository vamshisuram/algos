const size = 10;

const cache = new Array(10).fill(null);

class Cache {
  data = new Map();
  add(k, v) {
    if (this.data.size === size) {
      // remove from front, add at last
      this.data.delete(this.data.keys().next().value);
    }
    this.data.set(k, v);
  }
  get(key) {
    // any custom value return?
    if (!this.data.has(key)) return null;
    // delete, and add freshly at end
    const val = this.data.get(key);
    this.data.delete(key);
    this.data.set(key, val);
  }
  getLRU() {
    return Array.from(this.data)[0];
  }
  getMRU() {
    return Array.from(this.data)[this.data.size - 1];
  }
}
