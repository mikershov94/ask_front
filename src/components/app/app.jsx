import React from 'react';
import { Route } from 'react-router-dom';
import AppHeader from './../app-header';
import { Latest } from './../pages';
import Sidebar from './../sidebar';	

import "./app.sass"

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			sideBarOpen: false
		};

		this.onBurgerClick = () => {
			this.setState(state => ({
				sideBarOpen: !state.sideBarOpen
			}));
		};
	}
	
	render() {
		let sideBarClass
		if (this.state.sideBarOpen) {
			sideBarClass = "sidebar";
		} else {
			sideBarClass = "sidebar-none";
		};

		return(
			<div>
				<AppHeader onBurgerClick={this.onBurgerClick} />
				<div className="app-wrapper">
					<Sidebar sidebarClass={sideBarClass} />
					<Route path="/" exact component={Latest} />
				</div>
			</div>
		);
	}
};

export default App;