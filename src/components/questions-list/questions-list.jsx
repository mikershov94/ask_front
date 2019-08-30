import React from 'react';
import QuestionsListItem from './../questions-list-item';
import "./questions-list.sass";

const QuestionsList = ({ questions, url }) => {
	return(
		<div className="questions-list">
			{
				questions.map((question) => {
					const idx = questions.indexOf(question) + 1;
					return(
						<div key={question.id}>
							<QuestionsListItem question={question}
																 url={url}
																 idx={idx} />							
						</div>
					);
				})
			}
		</div>
	);
};

export default QuestionsList;