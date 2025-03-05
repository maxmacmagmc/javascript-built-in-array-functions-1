let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
	// Start coding here
	let numberWords = [];
	words.filter((words) =>
		words.length >= 5 ? numberWords.push(words) : numberWords
	);
	return numberWords;
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
