let random = Math.random();
if (random < 0.5) {
    console.log("YOUR NUMBEWR IS LESS THAN 0.5!!");
    console.log(random);
} else {
    console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!!");
}
// const dayOfWeek = prompt("ENTER A DAY").toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("UGHHH I HATE MONDAYS!");
// } else if (dayOfWeek === 'saturday') {
//     console.log("YAY I LOVE SATURDAYS!");
// } else if (dayOfWeek === 'friday') {
//     console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!");
// } else {
//     console.log("MEH");
// }

// 0-5 - free
// 5-10 Child $10
// 10-65 Adult $20
// 65+ senior $10

// const age = 890;

// if (age < 5) {
//     console.log("You are a baby. You get in for free!");
// } else if (age < 10) {
//     console.log("You are a child. You pay $10");
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20");
// } else {
//     console.log("You are a senior. You pay $10");
// }

const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    // Pass word cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain any spaces")
    }
} else {
    console.log("PASSWORD TO SHORT! Must be 6+ characters");
}