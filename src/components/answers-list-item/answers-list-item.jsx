import React from 'react';

import './answers-list-item.sass';

const AnswersListItem = ({ text, trust }) => {
	return(
		<div>
			<h3>{text}</h3>
			<div>{trust}</div>
		</div>
	);
};

export default AnswersListItem;