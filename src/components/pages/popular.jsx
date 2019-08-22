import React from 'react';
import { fetchPopularQuestions } from './../../actions';
import QuestionsListContainer from './../../containers/questions-list-container';

const Popular = (props) => {
	return(
		<div>
			<QuestionsListContainer fetchQuestions={fetchPopularQuestions}
															url={props.match.url} />
		</div>
	);
};

export default Popular;