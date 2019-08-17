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

export {
	questionsRequested,
	questionsLoaded,
	errorLoading
}