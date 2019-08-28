import React from 'react';

import './question-details.sass';

const QuestionDetails = ({ title, text }) => {

	return(
		<div>
			<h2>{title}</h2>
			<p>{text}</p>
		</div>
	);
};

export default QuestionDetails;