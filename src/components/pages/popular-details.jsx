import React from 'react';
import { fetchPopularQuestionPage } from './../../actions';
import QuestionContainer from './../../containers/question-container';

const PopularDetails = (props) => {

	return(
		<QuestionContainer fetchQuestionPage={fetchPopularQuestionPage}
											 idx={props.match.params.idx} />
	);
};

export default PopularDetails;