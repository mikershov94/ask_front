const questionPageRequested = () => {
	return {
		type: 'FETCH_QUESTION_PAGE_REQUEST'
	};
};

const questionPageLoaded = (questionPage) => {
	return {
		type: 'FETCH_QUESTION_PAGE_SUCCESS',
		payload: questionPage
	};
};

const pageErrorLoading = (error) => {
	return {
		type: 'FETCH_QUESTION_PAGE_FAILURE',
		payload: error
	};
};

const fetchLatestQuestionPage = (askService) => (idx) => (dispatch) => {
	dispatch(questionPageRequested());
	askService.getLatestQuestionPage(idx)
		.then(data => dispatch(questionPageLoaded(data)))
		.catch(err => dispatch(pageErrorLoading(err)));
};

const fetchPopularQuestionPage = (askService) => (idx) => (dispatch) => {
	dispatch(questionPageRequested());
	askService.getPopularQuestionPage(idx)
		.then(data => dispatch(questionPageLoaded(data)))
		.catch(err => dispatch(pageErrorLoading(err)));
};

export {
	fetchLatestQuestionPage,
	fetchPopularQuestionPage
};