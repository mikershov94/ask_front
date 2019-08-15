import React from 'react';

import "./app-header.sass";

const AppHeader = ({ onBurgerClick }) => {
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <div className="d-flex navbar-brand">
		  	<img className="logo" src="/img/ask-logo.png" />
				<h2 className="name">ASK</h2>
		  </div>
		  <button className="navbar-toggler"
		  				type="button"
		  				data-toggle="collapse"
		  				data-target="#navbarSupportedContent"
		  				aria-controls="navbarSupportedContent"
		  				aria-expanded="false"
		  				aria-label="Toggle navigation"
		  				onClick={ onBurgerClick }>
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  
		</nav>
	);
};

export default AppHeader;