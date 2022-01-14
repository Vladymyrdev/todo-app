import { ActionTypes } from './types';

export const onRemoveFromToDoList = (item) => ({
	type: ActionTypes.DELETE_FROM_TODO_LIST,
	payload: item,
});

export const onRemoveFromComplitedList = (item) => ({
	type: ActionTypes.DELETE_FROM_COMPLITED_LIST,
	payload: item,
});

export const onAddComplited = (task) => ({
	type: ActionTypes.ADD_COMPLITED,
	payload: task,
});

export const onAddToDo = (todo) => ({
	type: ActionTypes.ADD_TODO,
	payload: todo,
});

export const enterTheme = (mode) => ({
	type: ActionTypes.THEME,
	payload: mode,
});
