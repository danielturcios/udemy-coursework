let input = parseInt(prompt("Welcome! Enter your max number"));
while (!input) {
    input = parseInt(prompt("Enter a valid number!"));
}

const answer = Math.floor(Math.random() * input) + 1;
let guess = prompt("Enter your first guess");
let count = 1;

while (parseInt(guess) != answer) {
    if (guess === 'q') break;
    count++;
    if (guess < answer) {
        guess = prompt("Too low. Guess again");
    } else {
        guess = prompt("Too high. Guess again");
    }
}
if (guess === 'q') {
    console.log("OK, YOU QUIT! GOODBYE!")
} else {
    console.log(`Correct! The answer was ${answer}. It took you ${count} guess(es).`)
}