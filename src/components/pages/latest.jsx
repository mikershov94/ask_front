import React from 'react';
import { fetchLatestQuestions } from './../../actions';
import QuestionsListContainer from './../../containers/questions-list-container';

const Latest = () => {
	return(
		<div>
			<QuestionsListContainer fetchQuestions={fetchLatestQuestions} />
		</div>
	);
};

export default Latest;