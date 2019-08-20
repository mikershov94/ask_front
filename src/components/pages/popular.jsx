import React from 'react';
import { fetchPopularQuestions } from './../../actions';
import QuestionsListContainer from './../../containers/questions-list-container';

import './pages.sass';

const Popular = () => {
	return(
		<div className="page">
			<QuestionsListContainer fetchQuestions={fetchPopularQuestions} />
		</div>
	);
};

export default Popular;