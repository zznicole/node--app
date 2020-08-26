// process.stdin
// process.stdout.write("Hej ");
// process.stdout.write("Earth \n\n\n");

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
}

ask();


// process.stdin.on('data', data => {

//     process.stdout.write(`\n\n\n${data.toString().trim()}\n\n\n`);
//     process.exit();
// });

const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim());
// Ask the next question one question is answered. 
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    };
});

// wire to exit event.

process.on("exit", () => {
    const [name, activity, lang] = answers;
    console.log(`
    
    Thank you for your anwsers.
    
    Go ${activity}, ${name}. You can write ${lang} code later!!!`);
});

