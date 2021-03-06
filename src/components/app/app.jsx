import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppHeader from './../app-header';
import { Latest, Popular, LatestDetails, PopularDetails } from './../pages';
import SidebarContainer from './../../containers/sidebar-container';	

import "./app.sass"

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			sideBarOpen: false,
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
					<SidebarContainer sidebarClass={sideBarClass} />
					<div className="page">
						<Route path="/" exact component={Latest} />
						<Route path="/latest" exact component={Latest} />
						<Route path="/popular" exact component={Popular} />
						<Route path="/latest/:idx" component={LatestDetails} />
						<Route path="/popular/:idx" component={PopularDetails} />
					</div>
				</div>
			</div>
		);
	}
};

export default App;