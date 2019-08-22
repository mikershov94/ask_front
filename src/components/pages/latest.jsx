import React from 'react';
import { fetchLatestQuestions } from './../../actions';
import QuestionsListContainer from './../../containers/questions-list-container';

const Latest = (props) => {
	return(
		<div>
			<QuestionsListContainer fetchQuestions={fetchLatestQuestions}
															url={props.match.url} />
		</div>
	);
};

export default Latest;