import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';

// Add components
import NavBar from './components/Navbar/NavBar';

//Add context, reducer and usePersist(LocalStorage)
import { Store } from './components/TodoProvider/context';
import reducer from './components/TodoProvider/reducer/reducer';
import { usePersistedContext, usePersistedReducer } from './utils/usePersist';

// Metarial-UI Theme(Dark or Light)
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, CssBaseline, Container } from '@material-ui/core';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ComplitedTaskPage } from './pages/ComplitedTaskPage';
import { RouteNames } from './route';

const App = () => {
	const globalStore = usePersistedContext(useContext(Store), 'state');

	const [state, dispatch] = usePersistedReducer(
		useReducer(reducer, globalStore),
		'state'
	);

	const theme = createMuiTheme({
		palette: {
			type: state.myTheme, // "light" or "dark"
		},
	});

	return (
		<BrowserRouter>
			<Container>
				<Store.Provider value={{ state, dispatch }}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<NavBar />
						<Switch>
							<Route path={RouteNames.HOME}>
								<HomePage />
							</Route>
							<Route path={RouteNames.COMPLITED_TASKS}>
								<ComplitedTaskPage />
							</Route>
							<Redirect to="/home" />
						</Switch>
					</ThemeProvider>
				</Store.Provider>
			</Container>
		</BrowserRouter>
	);
};
ReactDOM.render(<App />, document.querySelector('#root'));
