import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '20px',
		'& > *': {
			margin: theme.spacing(1),
			textDecoration: 'none',
		},
	},
}));

export const CustomButton = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Link to="/home">
				<Button variant="contained" color="primary">
					Back to home page
				</Button>
			</Link>
		</div>
	);
};
