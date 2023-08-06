import React from 'react';
import {
	Redirect,
	Route,
	BrowserRouter as Router,
	Switch,
} from 'react-router-dom';

import { BackToTop } from './components';
import { Main, ProjectPage } from './pages';
import ScrollToTop from './utils/ScrollToTop';

import './App.css';

function App() {
	return (
		<div className="app">
			<Router>
				<ScrollToTop />
				<Switch>
					<Route path="/" exact component={Main} />
					<Route path="/projects" exact component={ProjectPage} />

					<Redirect to="/" />
				</Switch>
			</Router>
			<BackToTop />
		</div>
	);
}

export default App;
