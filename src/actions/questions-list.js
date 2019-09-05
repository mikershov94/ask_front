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

const fetchLatestQuestions = (askService) => (numPage = 0) => (dispatch) => {
	dispatch(questionsRequested());
	askService.getLatestQuestions(numPage)
		.then(data => dispatch(questionsLoaded(data)))
		.catch(err => dispatch(errorLoading(err)));
};

const fetchPopularQuestions = (askService) => (numPage = 0) => (dispatch) => {
	dispatch(questionsRequested());
	askService.getPopularQuestions(numPage)
		.then(data => dispatch(questionsLoaded(data)))
		.catch(err => dispatch(errorLoading(err)));
};

const changePage = (numPage) => {
	return {
		type: 'CHANGE_PAGE',
		payload: numPage
	}
};

export {
	fetchLatestQuestions,
	fetchPopularQuestions,
	changePage
};