import React from 'react';

import './question-details.sass';

const validateDate = (int) => {
	const string = String(int);
	if (int < 10) {
		return('0'+string);
	}
	return string;
};

const QuestionDetails = (props) => {
	const { title, text, added_at, rating } = props.question;
	const year = validateDate(added_at.getFullYear());
	const month = validateDate(added_at.getMonth());
	const day = validateDate(added_at.getDate());
	const hours = validateDate(added_at.getHours());
	const minutes = validateDate(added_at.getMinutes());

	return(
		<div>
			<h2>{title}</h2>
			<p>{text}</p>
			<div>
					<p>Задан: {`${day}.${month}.${year} ${hours}:${minutes}`}</p>
					<p>Лайков: {rating}</p>
					<span>Нравится 
						<i>
							<img src="/icons/fill-like.svg" />
						</i>
						<i>
							<img src="/icons/outline-like.svg" />
						</i>
					</span>
				</div>
		</div>
	);
};

export default QuestionDetails;