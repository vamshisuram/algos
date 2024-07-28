var Stack = function () {
  this.data = [];
  this.peek = () => this.data[this.data.length - 1];
  this.pop = () => this.data.pop();
  this.push = (x) => this.data.push(x);
  this.empty = () => this.data.length === 0;
  this.toString = () => {
    return `[${this.data.join(",")}]`;
  };
};

var MyQueue = function () {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
  return this.stack1.toString();
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (!this.stack1.empty()) {
    const val = this.stack1.pop();
    this.stack2.push(val);
  }
  const out = this.stack2.pop();
  while (!this.stack2.empty()) {
    const val = this.stack2.pop();
    this.stack1.push(val);
  }
  this.stack2 = new Stack();
  return out;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (!this.stack1.empty()) {
    const val = this.stack1.pop();
    this.stack2.push(val);
  }
  const out = this.stack2.peek();
  while (!this.stack2.empty()) {
    const val = this.stack2.pop();
    this.stack1.push(val);
  }
  this.stack2 = new Stack();
  return out;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.empty();
};

const myQueue = new MyQueue();

console.log(myQueue.push(1)); // queue is: [1]
const val = myQueue.push(2);
console.log(val); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue.peek()); // return 1
console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue.empty()); // return false

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
