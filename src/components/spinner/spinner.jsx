import React from 'react';
import './spinner.sass';

const Spinner = () => {
	return(
		<div className="d-flex m-auto">
			<div className="spinner-border text-primary" role="status">
	  		<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
};

export default Spinner;