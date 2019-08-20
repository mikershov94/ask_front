import React from 'react';
import { fetchPopularQuestions } from './../../actions';
import QuestionsListContainer from './../../containers/questions-list-container';

const Popular = () => {
	return(
		<div>
			<QuestionsListContainer fetchQuestions={fetchPopularQuestions} />
		</div>
	);
};

export default Popular;