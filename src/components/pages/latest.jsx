import React from 'react';
import { fetchLatestQuestions } from './../../actions';
import QuestionsListContainer from './../../containers/questions-list-container';

import "./pages.sass";

const Latest = () => {
	return(
		<div className="page">
			<QuestionsListContainer fetchQuestions={fetchLatestQuestions} />
		</div>
	);
};

export default Latest;