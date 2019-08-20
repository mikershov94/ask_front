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

const fetchLatestQuestions = (askService) => () => (dispatch) => {
	dispatch(questionsRequested());
	askService.getLatestQuestions()
		.then(data => dispatch(questionsLoaded(data)))
		.catch(err => dispatch(errorLoading(err)));
};

const fetchPopularQuestions = (askService) => () => (dispatch) => {
	dispatch(questionsRequested());
	askService.getPopularQuestions()
		.then(data => dispatch(questionsLoaded(data)))
		.catch(err => dispatch(errorLoading(err)));
};

const toggleToPopular = () => {
	return {
		type: 'TOGGLE_SORT_TO_POPULAR'
	};
};

const toggleToLatest = () => {
	return {
		type: 'TOGGLE_SORT_TO_LATEST'
	};
};

export {
	questionsRequested,
	questionsLoaded,
	errorLoading,
	fetchLatestQuestions,
	fetchPopularQuestions,
	toggleToLatest,
	toggleToPopular
}