// Student Grade Analyzer

class Student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }

    getAverage() {
        let total = 0;

        for (let i = 0; i < this.scores.length; i++) {
            total = total + this.scores[i];
        }

        return total / this.scores.length;
    }

    getLetterGrade() {
        let average = this.getAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}

function analyzeClass(students) {
    let total = 0;
    let topStudent = students[0];

    console.log("------ STUDENT REPORT ------");

    for (let i = 0; i < students.length; i++) {
        let average = students[i].getAverage();
        let grade = students[i].getLetterGrade();

        console.log(
            students[i].name +
            " - Average: " +
            average.toFixed(1) +
            " | Grade: " +
            grade
        );

        total = total + average;

        if (average > topStudent.getAverage()) {
            topStudent = students[i];
        }
    }

    let classAverage = total / students.length;

    console.log("----------------------------");
    console.log("Class Average: " + classAverage.toFixed(1));
    console.log(
        "Top Student: " +
        topStudent.name +
        " with " +
        topStudent.getAverage().toFixed(1)
    );
}

const studentData = [
    new Student("Lany", [85, 90, 92]),
    new Student("Bongbung", [70, 75, 68]),
    new Student("Dutherthe", [95, 98, 92]),
    new Student("Pico", [55, 60, 58])
];

analyzeClass(studentData);