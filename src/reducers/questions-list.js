const updateQuestionsList = (state, action) => {
	if (state === undefined) {
		return {
			questions: [],
			loading: true,
			errors: false,
			questionsCount: 0
		};
	}

	switch(action.type) {
		case 'FETCH_QUESTIONS_REQUEST':
			return {
				...state,
				questionsList: {
					questions: state.questions,
					loading: true,
					errors: false,
					questionsCount: 0
				}
			};
		case 'FETCH_QUESTIONS_SUCCESS':
			return {
				...state,
				questionsList: {
					questions: action.payload,
					loading: false,
					errors: false,
					questionsCount: action.payload.count
				},
			};
		case 'FETCH_QUESTIONS_FAILURE':
			return {
				...state,
				questionsList: {
					questions: [],
					loading: false,
					errors: true,
					questionsCount: 0
				}
			};
	};

};

export default updateQuestionsList;