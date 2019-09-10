import React from 'react';
import AnswersListItem from './../answers-list-item';

import './answers-list.sass';

const AnswersList = ({ answers }) => {
	return(
		<div>
			<h2>Ответы:</h2>
			<div>
				{
					answers.map((answer, idx) => {
						return(
							<div key={idx} >
								<AnswersListItem text={answer.text}
															 	 trust={answer.trust} />
							</div>
						);
					})
				}
			</div>
		</div>
	);
};

export default AnswersList;