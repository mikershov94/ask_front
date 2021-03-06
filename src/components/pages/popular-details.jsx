import React from 'react';
import { fetchPopularQuestionPage } from './../../actions';
import QuestionContainer from './../../containers/question-container';

const PopularDetails = (props) => {

	return(
		<div>
			<QuestionContainer fetchQuestionPage={fetchPopularQuestionPage}
											 	 idx={props.match.params.idx}
											 	 path={props.match.path} />
		</div>
	);
};

export default PopularDetails;