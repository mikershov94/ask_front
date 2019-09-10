import React from 'react';

const AnswersList = ({ answers }) => {
	return(
		<div>
			<h2>Ответы:</h2>
			<div>
				{
					answers.map(answer => {
						return <AnswersListItem text={answer.text}
																		trust={answer.trust} />;
					})
				}
			</div>
		</div>
	);
};

export default AnswersList;