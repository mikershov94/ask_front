import React from 'react';

import "./app-header.sass";

const AppHeader = () => {
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <div className="navbar-brand header">
		  	<img className="logo" src="/img/ask-logo.png" />
				<h2 className="name">ASK</h2>
		  </div>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item active">
		        <a className="nav-link" href="#">Последние <span className="sr-only">(current)</span></a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="#">Популярные</a>
		      </li>
		    </ul>
		  </div>
		</nav>
	);
};

export default AppHeader;