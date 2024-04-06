import * as db from './db.js';
import * as tools from './tools.js';

const command = process.argv[2];
const title = process.argv[3];

switch (command) {
	case "list":
		const todos = await db.getAllTodos();
		let count = 1;
		console.log('LISTS OF TODOS:');
		for (const todo of todos) {
			console.log(`${count}. ${tools.displayTodo(todo)}`);
			count++;
		}
		break;
	case "add":
		const id = await db.addTodo({ title: 'okok' });
		console.log(id);
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
