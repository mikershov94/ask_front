import React from 'react';
import { fetchLatestQuestionPage } from './../../actions';
import QuestionContainer from './../../containers/question-container';
import AnswersListContainer from './../../containers/answers-list-container';

const LatestDetails = (props) => {
	return(
		<div>
			<QuestionContainer fetchQuestionPage={fetchLatestQuestionPage}
											 	 idx={props.match.params.idx}
											 	 path={props.match.path} />
			<AnswersListContainer />
		</div>
	);
};

export default LatestDetails;