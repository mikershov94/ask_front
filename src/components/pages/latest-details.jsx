import React from 'react';
import { fetchLatestQuestionPage } from './../../actions';
import QuestionContainer from './../../containers/question-container';

const LatestDetails = () => {

	return(
		<QuestionContainer fetchQuestionPage={fetchLatestQuestionPage} />
	);
};

export default LatestDetails;