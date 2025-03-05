// เรียกดูindex ;

let words = ["hello", "world"];

function getWordLengths(words) {
	// Start coding here
	let numberWords = [];
	words.map((words) => {
		numberWords.push(words.length);
		// console.log("words: ", words);
	});
	// console.log("words: ", words);
	// console.log("numberWords: ", numberWords);
	return numberWords;
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
