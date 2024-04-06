import * as tools from './tools.js';

export const displayTodo = (todo) => {
	return `[${todo._id}] - ${tools.displayStars(todo.stars)} - ${todo.finished ? 'done' : 'todo'} - ${todo.title}`;
};

export const displayStars = (_stars) => {
	const stars = _stars ? _stars : 0;
	return `${stars} stars`;
}
