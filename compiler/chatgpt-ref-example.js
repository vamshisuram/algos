
// 1. Tokenizer
function tokenize(input) {
    return input.split(/\s+/).map(token => {
        if (/^\d+$/.test(token)) return { type: 'NUMBER', value: Number(token) };
        if (token === '+') return { type: 'PLUS' };
        throw new Error(`Unexpected token: ${token}`);
    });
}

// 2. Parser (only handles NUMBER + NUMBER + ...)
function parse(tokens) {
    if (tokens.length === 0) throw new Error('Empty input');
    let node = { type: 'Number', value: tokens[0].value };
    let i = 1;
    while (i < tokens.length) {
        if (tokens[i].type !== 'PLUS') throw new Error('Expected +');
        const right = tokens[i + 1];
        if (!right || right.type !== 'NUMBER') throw new Error('Expected number');
        node = { type: 'Binary', op: '+', left: node, right: { type: 'Number', value: right.value } };
        i += 2;
    }
    return node;
}

// 3. Evaluator
function evalAST(node) {
    if (node.type === 'Number') return node.value;
    if (node.type === 'Binary') return evalAST(node.left) + evalAST(node.right);
    throw new Error('Unknown node type');
}

// Driver
function run(source) {
    const tokens = tokenize(source);
    const ast = parse(tokens);
    const result = evalAST(ast);
    console.log('Source:', source);
    console.log('Tokens:', tokens);
    console.log('AST:', JSON.stringify(ast, null, 2));
    console.log('Result:', result);
}

run('1 + 2 + 3'); // Output: 6
