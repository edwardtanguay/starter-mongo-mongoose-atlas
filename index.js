import * as db from './db.js';
import * as tools from './tools.js';

const command = process.argv[2];
const title = process.argv[3];

switch (command) {
	case "list":
		const todos = await db.getAllTodos();
		console.log(tools.displayTodos(todos));
		break;
	case "add":
		const id = await db.addTodo({ title, stars: 3, finished: false });
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
