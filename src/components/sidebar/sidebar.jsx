import React from 'react';

import "./sidebar.sass";

const Sidebar = ({ sidebarClass }) => {
	return(
		<div className={ sidebarClass }>
		  <nav className="nav flex-column nav-pills">

	      <a className="nav-link active"
	      	 href="#">Последние</a>

	      <a className="nav-link"
	      	 href="#">Популярные</a>

	    </nav>
		</div>
	);
};

export default Sidebar;