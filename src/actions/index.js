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

const changePage = (numPage) => {
	return {
		type: 'CHANGE_PAGE',
		payload: numPage
	}
};

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
	fetchLatestQuestions,
	fetchPopularQuestions,
	toggleToLatest,
	toggleToPopular,
	changePage,
	fetchLatestQuestionPage,
	fetchPopularQuestionPage
}