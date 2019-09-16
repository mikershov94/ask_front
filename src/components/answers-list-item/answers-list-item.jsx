import React from 'react';

import './answers-list-item.sass';

const AnswersListItem = ({ text, trust }) => {
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
					<span>Ответил: 00.00.0000 00:00</span>
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