/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.size = capacity;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  var val = -1;
  if (this.cache.has(key)) {
    val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
  }
  console.log(val);
  return val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {

  if (this.cache.has(key)) {
    var val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val)
  } else {
    if (this.size === this.cache.size) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
  console.log(this.cache);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4