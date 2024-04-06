import * as db from './db.js';

const command = process.argv[2];
const title = process.argv[3];

switch (command) {
	case "list":
		const todos = await db.getAllTodos();
		console.log('returned todos', todos);
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