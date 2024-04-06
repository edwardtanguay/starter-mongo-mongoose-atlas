import * as db from './db.js';
import * as tools from './tools.js';

const command = process.argv[2];
const title = process.argv[3];
let todos = [];

switch (command) {
	case "list":
		todos = await db.getAllTodos();
		console.log(tools.displayTodos(todos));
		break;
	case "add":
		const todo = await db.addTodo({ title, stars: 3, finished: false });
		console.log(tools.displayAdded(todo));
		break;
	case "edit":
		console.log('todo: edit');
		break;
	case "delete":
		console.log('todo: delete');
		break;
	default:
		console.log('TODO LIST CLI - available commands:');
		console.log('-------------------------------------------');
		console.log('npm run todos list');
		console.log('npm run todos add "clean kitchen"');
		console.log('-------------------------------------------');
		break;
}

process.exit();
