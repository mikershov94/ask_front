import React from 'react';
import './questions-list-item.sass';

const validateDate = (int) => {
	const string = String(int);
	if (int < 10) {
		return('0'+string);
	}
	return string;
};

const QuestionsListItem = (props) => {
	const { title, text, date, rating } = props.question;
	const year = validateDate(date.getFullYear());
	const month = validateDate(date.getMonth());
	const day = validateDate(date.getDate());
	const hours = validateDate(date.getHours());
	const minutes = validateDate(date.getMinutes());
	return(
		<div className="list-item">
				<h3>{title}</h3>
				<p>{text}</p>
				<div className="meta-info">
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

export default QuestionsListItem;