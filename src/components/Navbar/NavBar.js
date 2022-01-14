import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Menu, Brightness4, Brightness7 } from '@material-ui/icons';
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Tooltip,
} from '@material-ui/core';

import { Store } from '../TodoProvider/context';
import NavDrawer from './NavDrawer';
import { enterTheme } from '../TodoProvider/reducer/actions';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const NavBar = () => {
	const { state, dispatch } = useContext(Store);
	const [drawerOpened, setDrawerOpened] = useState(false);

	const classes = useStyles();
	let mode;
	const changeTheme = (mode) => {
		if (state.myTheme === 'dark') {
			mode = 'light';
		} else {
			mode = 'dark';
		}
		dispatch(enterTheme(mode));
	};

	const ToggleButton = () => {
		if (state.myTheme === 'dark') {
			return <Brightness7 />;
		} else {
			return <Brightness4 />;
		}
	};
	const toggleDrawer = (booleanValue) => () => {
		setDrawerOpened(booleanValue);
	};

	const handleChengeTheme = () => {
		changeTheme(mode);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={toggleDrawer(true)}
					>
						<Menu />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Todo List App
					</Typography>

					<Tooltip title="Toggle light/dark theme">
						<IconButton color="inherit" onClick={handleChengeTheme}>
							<ToggleButton />
						</IconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>
			<NavDrawer drawerOpened={drawerOpened} toggleDrawer={toggleDrawer} />
		</div>
	);
};
export default NavBar;
