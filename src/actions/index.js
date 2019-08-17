const questionsRequested = () => {
	return {
		type: 'FETCH_QUESTIONS_REQUEST',
	};
};

const questionsLoaded = (newQuestions) => {
	return {
		type: 'FETCH_QUESTIONS_SUCCESS',
		payload: newQuestions
	};
};

const errorLoading = (error) => {
	return {
		type: 'FETCH_QUESTIONS_FAILURE',
		payload: error
	};
};

const fetchQuestions = (askService) => () => (dispatch) => {
	dispatch(questionsRequested());
	askService.getQuestions()
		.then(data => dispatch(questionsLoaded(data)))
		.catch(err => dispatch(errorLoading(err)));
};

export {
	questionsRequested,
	questionsLoaded,
	errorLoading,
	fetchQuestions
}