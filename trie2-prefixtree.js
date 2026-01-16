

// This node is mapped to a 'Character'
class Node {
    constructor() {
        // immediate children
        this.nodes = {}
        this.end = false;
    }
}

class Trie {
    root = new Node();
    add(input, node = this.root) {
        if (!input.length) {
            node.end = true;
            return;
        }
        const c = input[0];
        const r = input.substr(1);
        if (!(c in node.nodes)) {
            node.nodes[c] = new Node();
        }
        this.add(r, node.nodes[c]);
    }
    isWord(input, node = this.root) {
        if (!input.length) {
            return node.end;
        }
        const c = input[0];
        if (c in node.nodes) {
            return this.isWord(input.substr(1), node.nodes[c]);
        } else {
            return false;
        }
    }
}




let t = new Trie()
t.add('abc')
t.add('ade')
t.add('xyz')
console.log(t.isWord('ab'));
console.log(t.isWord('abc'));
console.log(t.isWord('abcd'));