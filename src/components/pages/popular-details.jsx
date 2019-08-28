import React from 'react';
import { fetchPopularQuestionPage } from './../../actions';
import QuestionContainer from './../../containers/question-container';

const PopularDetails = () => {

	return(
		<QuestionContainer fetchQuestion={fetchPopularQuestionPage} />
	);
};

export default PopularDetails;