import React from 'react';

import "./questions-list.sass";

const QuestionsList = () => {
	return(
		<div className="questions-list">
			
			<div className="list-item">
				<h3>Заголовок 1</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
				<div className="meta-info">
					<p>Задан: 01.07.2019</p>
					<p>Лайков: 30</p>
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

			
			<div className="list-item nechet">
				<h3>Заголовок 2</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
				<div className="meta-info">
					<p>Задан: 02.07.2019</p>
					<p>Лайков: 20</p>
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
		
			
			<div className="list-item">
				<h3>Заголовок 3</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
				<div className="meta-info">
					<p>Задан: 03.07.2019</p>
					<p>Лайков: 10</p>
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
		</div>
	);
};

export default QuestionsList;