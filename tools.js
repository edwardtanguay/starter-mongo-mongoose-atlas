import * as tools from './tools.js';

export const displayTodo = (todo) => {
	return `[${todo._id}] - ${tools.displayStars(todo.stars)} - ${todo.finished ? 'done' : 'todo'} - ${todo.title}`;
};

export const displayStars = (_stars) => {
	const stars = _stars ? _stars : 0;
	return `${stars} stars`;
};

export const displayTodos = (todos) => {
	let r = '';
	let count = 1;
	r += 'LIST OF TODOS:\n';
	if (todos.length > 0) {
		for (const todo of todos) {
			r += `${count}. ${tools.displayTodo(todo)}\n`;
			count++;
		}
	} else {
		r += '(none)';
	}
	return r;
};

export const displaySingle = (title, todo) => {
	let r = '';
	r += `${title}:\n`;
	r += tools.displayTodo(todo);
	return r;
};
