import React from 'react';
import { TodoForm } from '../components/TodoContent/TodoForm';
import { TodoList } from '../components/TodoContent/TodoList';

export const HomePage = () => {
	return (
		<>
			<TodoForm />
			<TodoList />
		</>
	);
};
