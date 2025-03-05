let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  return words.map((count) => count.length);
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
