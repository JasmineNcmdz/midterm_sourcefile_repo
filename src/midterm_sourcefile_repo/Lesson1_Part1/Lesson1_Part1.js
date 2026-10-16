// Student Grade
let scores = [85, 72, 91, 64, 78];

let total = 0;
let highest = scores[0];
let lowest = scores[0];
let passed = 0;
let failed = 0;

console.log("Student Scores:");

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

console.log();

for (let i = 0; i < scores.length; i++) {

    let score = scores[i];
    let grade;
    let status;

    // Grade interpretation
    if (score >= 90) {
        grade = "Excellent";
    } else if (score >= 80) {
        grade = "Very Good";
    } else if (score >= 75) {
        grade = "Good";
    } else {
        grade = "Failed";
    }

    // Passed or Failed
    if (score >= 75) {
        status = "Passed";
        passed++;
    } else {
        status = "Failed";
        failed++;
    }

    console.log("Student " + (i + 1) + ": " + score + " - " + grade + " - " + status);

    // Total
    total = total + score;

    // Highest
    if (score > highest) {
        highest = score;
    }

    // Lowest
    if (score < lowest) {
        lowest = score;
    }
}

// Average
let average = total / scores.length;

console.log();
console.log("Total Score: " + total);
console.log("Average Score: " + average);
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Passed: " + passed);
console.log("Failed: " + failed);