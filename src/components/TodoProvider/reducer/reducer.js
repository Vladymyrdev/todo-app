import { ActionTypes } from './types';

const reducer = (state, action) => {
	switch (action.type) {
		case ActionTypes.ADD_TODO:
			if (!action.payload) {
				return state;
			}
			if (state.todos.includes(action.payload)) {
				return state;
			}
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		case ActionTypes.DELETE_FROM_TODO_LIST:
			return {
				...state,
				todos: state.todos.filter((t) => t !== action.payload),
			};
		case ActionTypes.DELETE_FROM_COMPLITED_LIST:
			return {
				...state,
				complitedTasks: state.complitedTasks.filter(
					(t) => t !== action.payload
				),
			};
		case ActionTypes.ADD_COMPLITED:
			return {
				...state,
				complitedTasks: state.complitedTasks.concat([action.payload]),
			};
		case ActionTypes.THEME:
			return {
				...state,
				myTheme: action.payload,
			};
		default:
			return state;
	}
};
export default reducer;
