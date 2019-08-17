import React from 'react';
import AppHeader from './../app-header';
import QuestionsListContainer from './../../containers/questions-list-container';
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
					<QuestionsListContainer />
				</div>
			</div>
		);
	}
};

export default App;