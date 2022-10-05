class Stack {
  constructor() {
    this.data = [];
  }

  get count() {
    return this.data.length;
  }

  push(val) {
    this.data.push(val);
  }

  pop() {
    this.data.pop();
  }

  print() {
    console.log(this.data.join(''));
    console.log(this.count);
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(4);
myStack.push(7);
myStack.push(9);
myStack.push(3);
myStack.print();
myStack.pop();
myStack.print();

