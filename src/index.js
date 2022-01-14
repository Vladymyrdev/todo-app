import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';

// Add components
import NavBar from './components/NavBar';

//Add context, reducer and usePersist(LocalStorage)
import Store from './context';
import reducer from './reducer';
import { usePersistedContext, usePersistedReducer } from './usePersist';

// Metarial-UI Theme(Dark or Light)
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, CssBaseline, Container } from '@material-ui/core';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ComplitedTaskPage } from './pages/ComplitedTaskPage';

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
							<Route path="/home">
								<HomePage />
							</Route>
							<Route path="/complited_tasks">
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
