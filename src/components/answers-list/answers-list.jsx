import React from 'react';
import AnswersListItem from './../answers-list-item';

import './answers-list.sass';

const AnswersList = ({ answers }) => {
	return(
		<div className="answers-list">
			<h2>Ответы:</h2>
			<div>
				{
					answers.map((answer, idx) => {
						return(
							<div key={idx} >
								<AnswersListItem answer={answer} />
							</div>
						);
					})
				}
			</div>
		</div>
	);
};

export default AnswersList;