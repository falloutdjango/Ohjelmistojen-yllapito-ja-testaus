const mylib = require('./mylib');

function main() {
    console.log('Add:', mylib.add(5, 3));
    console.log('Sub:', mylib.sub(5, 3));
    console.log('Mul:', mylib.mul(5, 3));
    console.log('Div:', mylib.div(10, 2));
}

main();
