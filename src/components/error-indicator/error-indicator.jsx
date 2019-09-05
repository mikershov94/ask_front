import React from 'react';
import './error-indicator.sass';

const ErrorIndicator = () => {
	return(
		<div>
			<i className="indicator">
				<img className="error-icon"
						 src="/icons/error.svg"/>
			</i>
			<div className="error-header-one">
			<h2>Извините</h2>
			</div>
			<div className="error-header-two">
				<h3>Что-то пошло не так</h3>
			</div>
		</div>
	);
};

export default ErrorIndicator;