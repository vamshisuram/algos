function Node() {
  this.keys = new Map();
  // at each node, it will have keys of all it's child nodes
  this.end = false;
  this.setEnd = () => (this.end = true);
}

const root = new Node();

function Trie() {
  this.root = root;
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word, node = root) {
  if (!word) {
    node.setEnd();
    return null;
  }
  if (!node.keys.has(word[0])) {
    node.keys.set(word[0], new Node());
  }
  this.insert(word.substr(1), node.keys.get(word[0]));
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word, node = root) {
  if (!word.length) {
    return node.end;
  }
  if (!node.keys.has(word[0])) {
    return false;
  } else {
    return this.search(word.substr(1), node.keys.get(word[0]));
  }
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix, node = root) {
  if (prefix === "") {
    if (node === root) {
      return false;
    } else {
      return true;
    }
  } else {
    if (node.keys.has(prefix[0])) {
      return this.startsWith(prefix.substr(1), node.keys.get(prefix[0]));
    } else {
      return false;
    }
  }
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// const trie = new Trie();
// trie.insert("apple");
// trie.search("apple"); // return True
// trie.search("app"); // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app"); // return True

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
const trie = new Trie();
console.log(trie.startsWith("a"));

// trie.insert("apple");
// trie.search("apple"); // return True
// trie.search("app"); // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app"); // return True
