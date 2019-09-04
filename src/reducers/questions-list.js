const updateQuestionsList = (state, action) => {
	
	if (state === undefined) {
		return {
			questions: [],
			loading: true,
			errors: false,
			questionsCount: 0,
			numPage: 0
		};
	}

	switch(action.type) {
		case 'FETCH_QUESTIONS_REQUEST':
			return {
				...state,
				questions: state.questions,
				loading: true,
				errors: false,
				questionsCount: 0,
			};
		case 'FETCH_QUESTIONS_SUCCESS':
			return {
				...state,
				questions: action.payload,
				loading: false,
				errors: false,
				questionsCount: action.payload.count
			};
		case 'FETCH_QUESTIONS_FAILURE':
			return {
				...state,
				questions: [],
				loading: false,
				errors: true,
				questionsCount: 0
			};
		case 'CHANGE_PAGE':
			return {	
				...state,
				numPage: action.payload
			};
		default:
			return state.questionsList;
	};

};

export default updateQuestionsList;