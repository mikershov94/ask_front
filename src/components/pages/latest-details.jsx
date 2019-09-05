import React from 'react';
import { fetchLatestQuestionPage } from './../../actions';
import QuestionContainer from './../../containers/question-container';

const LatestDetails = (props) => {
	return(
		<QuestionContainer fetchQuestionPage={fetchLatestQuestionPage}
											 idx={props.match.params.idx}
											 path={props.match.path} />
	);
};

export default LatestDetails;