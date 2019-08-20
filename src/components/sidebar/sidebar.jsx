import React from 'react';
import { Link } from 'react-router-dom';

import "./sidebar.sass";

const Sidebar = ({ sidebarClass, toggleToLatest, toggleToPopular, latest, popular }) => {
	return(
		<div className={ sidebarClass }>
		  <nav className="nav flex-column nav-pills">

	      <Link className={latest}
	      	 		to="/latest"
	      	 		onClick={toggleToLatest} >Последние</Link>

	      <Link className={popular}
	      	 		to="/popular"
	      	 		onClick={toggleToPopular} >Популярные</Link>

	    </nav>
		</div>
	);
};

export default Sidebar;