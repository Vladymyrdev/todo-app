import React, { useContext, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { Store } from '../TodoProvider/context';
import DeleteIcon from '@material-ui/icons/Delete';
import {
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	IconButton,
	Grid,
	Typography,
} from '@material-ui/core';
import {
	onAddComplited,
	onRemoveFromComplitedList,
	onRemoveFromToDoList,
} from '../TodoProvider/reducer/actions';
import { RouteNames } from '../../route';

export const TodoList = () => {
	const history = useHistory();
	const { state, dispatch } = useContext(Store);

	const todoList = state?.todos;
	const complitedList = state?.complitedTasks;

	const countTodoTasks = todoList.length;
	const countComplitedTasks = complitedList.length;
	let comment;
	if (countTodoTasks === 0 && history.location.pathname === RouteNames.HOME) {
		comment = 'So when you are free, start another work to get tired!';
	} else if (
		countComplitedTasks === 0 &&
		history.location.pathname === RouteNames.COMPLITED_TASKS
	) {
		comment = "You don't have completed tasks yet, start working already";
	} else {
		comment = '';
	}

	const mappedTodoList = useMemo(
		() =>
			todoList.map((t) => (
				<ListItem divider key={t}>
					<ListItemText primary={t} />
					<ListItemSecondaryAction>
						<IconButton
							edge="end"
							aria-label="delete"
							onClick={() => {
								dispatch(onRemoveFromToDoList(t));
								dispatch(onAddComplited(t));
							}}
						>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			)),
		[dispatch, todoList]
	);

	const mappedComplitedList = useMemo(
		() =>
			complitedList.map((t) => (
				<ListItem divider key={t}>
					<ListItemText primary={t} />
					<ListItemSecondaryAction>
						<IconButton
							edge="end"
							aria-label="delete"
							onClick={() => dispatch(onRemoveFromComplitedList(t))}
						>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			)),
		[complitedList, dispatch]
	);

	return (
		<div>
			<br />
			<br />
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h6">
						{history.location.pathname === RouteNames.HOME
							? `Todo List (${countTodoTasks})`
							: `Complited List (${countComplitedTasks})`}
					</Typography>
					<Typography>{comment}</Typography>
					<br />
					<div>
						<List>
							{history.location.pathname === RouteNames.HOME
								? mappedTodoList
								: mappedComplitedList}
						</List>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};
