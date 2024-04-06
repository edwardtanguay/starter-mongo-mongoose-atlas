import * as db from './db.js';
import * as tools from './tools.js';

const command = process.argv[2];
let title = '';
let id = '';
let todo = null;
let todos = [];

switch (command) {
	case "list":
		todos = await db.getAllTodos();
		console.log(tools.displayTodos(todos));
		break;
	case "add":
		title = process.argv[3];
		todo = await db.addTodo({ title, stars: 3, finished: false });
		console.log(tools.displaySingle('ADDED', todo));
		break;
	case "delete":
		id = process.argv[3];
		todo = await db.deleteTodo(id);
		console.log(tools.displaySingle('DELETED', todo));
		break;
	case "edit":
		console.log('todo: edit');
		break;
	default:
		console.log('TODO LIST CLI - available commands:');
		console.log('-------------------------------------------');
		console.log('npm run todos list');
		console.log('npm run todos add "clean kitchen"');
		console.log('npm run todos delete 66114bb7e99056b3ffba3734');
		console.log('-------------------------------------------');
		break;
}

process.exit();
