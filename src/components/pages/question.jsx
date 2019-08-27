import React from 'react';

const Question = (props) => {
	const { title, text } = props

	return(
		<div>
			<h2>{ title }</h2>
			<p>{ text }</p>
		</div>
	);
};

export default Question;