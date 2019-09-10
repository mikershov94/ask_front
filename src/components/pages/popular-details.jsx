import React from 'react';
import { fetchPopularQuestionPage } from './../../actions';
import QuestionContainer from './../../containers/question-container';
import AnswersListContainer from './../../containers/answers-list-container';

const PopularDetails = (props) => {

	return(
		<div>
			<QuestionContainer fetchQuestionPage={fetchPopularQuestionPage}
											 	 idx={props.match.params.idx}
											 	 path={props.match.path} />
			<AnswersListContainer />
		</div>
	);
};

export default PopularDetails;