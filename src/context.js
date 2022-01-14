import React from 'react';

export const Store = React.createContext({
	todos: [
		'Learn HTML and CSS',
		'Learn JavaScript(ES6+)',
		'Design with Figma',
		"Develop applications with 'React' and 'Material-UI'",
	],
	myTheme: 'light',
	complitedTasks: [],
});
