// ==============  FOR LOOPS  ==============
// for (let num = 1; num <= 10; num++) {
//     console.log(num);
// }

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//     console.log(i);
// }

// DO NOT RUN THIS LOOP
// INFINITE LOOP!! BAD!!
// =====================
// =====================
// for (let i=20; i>=0; i++) {
//     console.log(i);
// }
// =====================
// =====================
// DO NOT RUN THIS LOOP
// INFINITE LOOP!! BAD!!

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`);
//     for (let j = 1; j < 4; j++) {
//         console.log(`       j is: ${j}`);
//     }
// }

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
];

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW: ${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

// ==============  While loops  ==============
// let count = 0;
// while (count < 10) {
//     console.log(count);
//     count++;
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!");

// let input = prompt("Hey, say something!");
// while (true) {
//     inout = prompt(input);
//     if (input.toLowerCase() === "stop copying me") {
//         break;
//     }
// }
// console.log("OK YOU WIN!")

// ==============  For...Of Loops  ==============
const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`);
}

// see lines 37-49
// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

// for (let char of "hello world") {
//     console.log(char);
// }\

