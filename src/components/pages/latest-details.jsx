import React from 'react';
import { fetchLatestQuestionPage } from './../../actions';
import QuestionContainer from './../../containers/question-container';

const LatestDetails = (props) => {
	return(
		<div>
			<QuestionContainer fetchQuestionPage={fetchLatestQuestionPage}
											 	 idx={props.match.params.idx}
											 	 path={props.match.path} />
		</div>
	);
};

export default LatestDetails;