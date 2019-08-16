import React from 'react';

const QuestionsListItem = () => {
	return(
		<div className="list-item">
				<h3>{title}</h3>
				<p>{text}</p>
				<div className="meta-info">
					<p>Задан: {date}</p>
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