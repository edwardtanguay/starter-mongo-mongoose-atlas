import * as db from './db.js';

const command = process.argv[2];
const title = process.argv[3];

const displayTodo = (todo) => {
	return `${todo.title} - ${todo.stars} stars - ${todo.finished ? 'finished' : 'todo'}`;
};

switch (command) {
	case "list":
		const todos = await db.getAllTodos();
		let count = 1;
		for (const todo of todos) {
			console.log(`${count}. ${displayTodo(todo)}`);
			count++;
		}
		break;
	case "add":
		console.log('todo: add');
		break;
	case "edit":
		console.log('todo: edit');
		break;
	case "delete":
		console.log('todo: delete');
		break;
	default:
		console.log('bad command');
		break;
}

process.exit();
