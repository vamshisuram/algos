// 1 + 2 + 3
function tokenizer(input) {
    return input.split(/\s+/)      // Tokenizer Part
        .map(token => {            // Lexer .. assigns meaning as well
            if (/^\d+$/.test(token)) {
                return {type: 'NUMBER', value: Number(token)}
            }
            if (token === '+') {
                return {type: 'PLUS'};
            }
            throw new Error(`unexpected token: ${token}`);
        })
}

function parse(tokens) {
    // build a tree (or structure)
    let node = {type: 'NUMBER', value: tokens[0].value};
    let i = 1;
    while (i < tokens.length) {
        let token = tokens[i];
        if (token.type === 'PLUS') {
            node = {
                left: node,
                right: { type: 'NUMBER', value: tokens[i + 1].value },
                type: 'BINARY',
                op: '+'
            }
            i += 2;
        }
    }
    return node;
}

function evalAST(node) {
    if (node.type === 'NUMBER') return node.value
    if (node.type === 'BINARY') return evalAST(node.left) + evalAST(node.right)
}


function compiler(input) {
    // 1. tokenize
    // 2. parse tokens to nodes / tree structure AST
    // 3. evaluate nodes
    // 4. result
    const tokens = tokenizer(input)
    const tree = parse(tokens);
    const val = evalAST(tree)
    return val;
}

console.log(compiler('1 + 2 + 3'));