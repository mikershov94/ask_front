import React from 'react';
import QuestionsListItem from './../questions-list-item';
import "./questions-list.sass";

const QuestionsList = ({ questions }) => {
	return(
		<div className="questions-list">
			{
				questions.map((question) => {
					return(
						<div key={question.id}>
							<QuestionsListItem question={question} />							
						</div>
					);
				})
			}
		</div>
	);
};

export default QuestionsList;