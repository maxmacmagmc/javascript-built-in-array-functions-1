const todos = [
	{ topic: "Doing pre-work", completed: true },
	{ topic: "Workout", completed: false },
	{ topic: "Playing computer games", completed: true },
	{ topic: "Relax", completed: false },
	{ topic: "Clean the room", completed: true },
];

function getTodoTopics(todos) {
	// Start coding here
	let topicTodos = [];
	todos.map((todos) => {
		// console.log("todos: ", todos.topic);
		topicTodos.push(todos.topic);
	});
	console.log("topicTodos: ", topicTodos);
	return topicTodos;
}

getTodoTopics(todos);

/* 
	Output:
	[
		'Doing pre-work',
		'Workout',
		'Playing computer games',
		'Relax',
		'Clean the room'
	]
*/
