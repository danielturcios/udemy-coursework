const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
};

// Below loop causes TypeError: testScores is not iterable
// for (let person of testScores) {
//     console.log(person);
// }

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }

let total = 0;
let scores = Object.values(testScores);
for (let score of Object.values(testScores)) {
    total += score;
}
console.log(total / scores.length);