import React from 'react';

import './answers-list-item.sass';

const AnswersListItem = ({ text, trust }) => {
	return(
		<div>
			<p>{text}</p>
			<div>{trust}</div>
		</div>
	);
};

export default AnswersListItem;