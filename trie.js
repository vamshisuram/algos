
class Node {
  // immediate children as keys (nodes) 
  // - which internally have their children
  keys = new Map()
  end = false
}

class Trie {
  root = new Node()
  add(str, node = this.root) {
    if (!str.length) {
      node.end = true
      return;
    }
    // pick first char / create a new Node and recursive call
    const c = str[0]
    if (!node.keys[c]) {
      node.keys[c] = new Node()
    }
    this.add(str.slice(1), node.keys[c])
  }
  isWord(word) {
    let node = this.root
    let len = 0;
    for (let c of word) {
      node = node.keys[c]
      len++;
      if (node) {
        if (len === word.length && node.end) {
          return true
        }
        continue
      } else {
        return false
      }
    }
    return false
  }
  print() {
    console.log(this.root);
  }
}

let t = new Trie()
t.add('abc')
t.add('ade')
t.add('xyz')
console.log(t.isWord('ab'));
console.log(t.isWord('abc'));
console.log(t.isWord('abcd'));


