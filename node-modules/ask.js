const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("How to you like Node? ", answer => {
    console.log(`your answer: ${answer}`);
});