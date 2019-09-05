import React from 'react';
import { Link } from 'react-router-dom';
import './questions-list-item.sass';

const validateDate = (int) => {
	const string = String(int);
	if (int < 10) {
		return('0'+string);
	}
	return string;
};

const QuestionsListItem = (props) => {
	const { title, text, added_at, rating } = props.question;
	const year = validateDate(added_at.getFullYear());
	const month = validateDate(added_at.getMonth());
	const day = validateDate(added_at.getDate());
	const hours = validateDate(added_at.getHours());
	const minutes = validateDate(added_at.getMinutes());

	let url = props.url;
	if (url === '/') {
		url = '/latest';
	};

	let itemClass = "";
	if (props.idx % 2 === 0) {
		itemClass = "list-item grey"
	} else {
		itemClass = "list-item"
	};

	return(
		<div className={itemClass} >
				<Link to={`${url}/${props.idx}`} ><h3>{title}</h3></Link>
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