import React from 'react';
import { validateDate } from './../../utils';

import './answers-list-item.sass';

const AnswersListItem = (props) => {
	const { text, added_at, trust } = props.answer;

	const year = validateDate(added_at.getFullYear());
	const month = validateDate(added_at.getMonth());
	const day = validateDate(added_at.getDate());
	const hours = validateDate(added_at.getHours());
	const minutes = validateDate(added_at.getMinutes());

	return(
		<div className="answer-wrapper">
			<div className="answer-body">
				<div className="answer-avatar">
					<img src="/img/user.png"/>
				</div>
				<div className="answer-content">
					<h5>Имя пользователя</h5>
					<p>{text}</p>
				</div>
			</div>
			<div className="answer-meta">
					<span>Ответил: {`${year}.${month}.${day} ${hours}:${minutes}`}</span>
					<span>Рейтинг ответа: {trust}</span>
					<span>Правильно 
						<i><img src="/icons/answer_like.svg" /></i>
						<i><img src="/icons/answer_not_like.svg" /></i>
					</span>
				</div>
		</div>
	);
};

export default AnswersListItem;