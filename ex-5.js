// ดึงแต่ละ index มาบวกกับตัวต่อไป

const students = [
	{ name: "John", score: 80 },
	{ name: "Jane", score: 90 },
	{ name: "Jim", score: 85 },
	{ name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
	// Start coding here
	let score = students.reduce((answwer, students) => {
		// console.log("acc: ", answwer);
		// console.log("acc + students.score: ", answwer + " , " + students.score);
		return answwer + students.score;
	}, 0);
	// console.log(score);

	return studentAverage(score, students);
}

const studentAverage = (score, students) => score / students.length;

// getAverageStudentScore(students); // Output: 87.5
console.log(
	"getAverageStudentScore(students): ",
	getAverageStudentScore(students)
);
