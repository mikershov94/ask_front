const updateQuestionPage = (state, action) => {

	if (state === undefined) {
		return {
			page: null,
			loading: true,
			errors: false
		};
	};

	switch (action.type) {
		case 'FETCH_QUESTION_PAGE_REQUEST':
			return {
				page: state.questionPage.page,
				loading: true,
				errors: false
			};
		case 'FETCH_QUESTION_PAGE_SUCCESS':
			return {
				page: action.payload,
				loading: false,
				errors: false
			};
		case 'FETCH_QUESTION_PAGE_FAILURE':
			return {
				page: null,
				loading: false,
				errors: true
			};
		default:
			return state.questionPage;
	};

};

export default updateQuestionPage;