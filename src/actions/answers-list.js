const answersListRequested = () => {
	return {
		type: 'ANSWERS_LIST_REQUEST';
	};
};

const answersListLoaded = (answers) => {
	return {
		type: 'ANSWERS_LIST_SUCCESS';
		payload: answers,
	};
};

const answersErrorLoading = (err) => {
	return {
		type: 'ANSWERS_LIST_FAILURE',
		payload: err,
	};
};

const fetchAnswers = (askService) => (question_id) => (dispatch) => {
	dispatch(answersListRequested());
	askService.getAnswers(question_id)
		.then(data => dispatch(answersListLoaded(data)))
		.catch(err => dispatch(answersErrorLoading(err)));

};

export {
	fetchAnswers
}