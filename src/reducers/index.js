const initialState = {
	questionsList: {
		questions: [],
		loading: true,
		errors: false,
	},
	questionPage: {
		page: null,
		loading: true,
		errors: false
	},
	sidebar: {
		latest: true,
		popular: false
	},
	paginate: {
		numPage: 0,
		questionsCount: 0
	},
};

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case 'FETCH_QUESTIONS_REQUEST':
			return {
				...state,
				questionsList: {
					questions: state.questions,
					loading: true,
					errors: false
				}
			};
		case 'FETCH_QUESTIONS_SUCCESS':
			return {
				...state,
				questionsList: {
					questions: action.payload,
					loading: false,
					errors: false
				},
				paginate: {
					...state,
					questionsCount: action.payload.count
				}
			};
		case 'FETCH_QUESTIONS_FAILURE':
			return {
				...state,
				questionsList: {
					questions: [],
					loading: false,
					errors: true
				}
			};

		case 'TOGGLE_SORT_TO_POPULAR':
			return {
				...state,
				sidebar: {
					latest: false,
					popular: true
				}
			};
		case 'TOGGLE_SORT_TO_LATEST':
			return {
				...state,
				sidebar: {
					latest: true,
					popular: false,
				}
			};

		case 'CHANGE_PAGE':
			return {
				...state,
				paginate: {
					...state,
					numPage: action.payload
				}
			};

		case 'FETCH_QUESTION_PAGE_REQUEST':
			return {
				...state,
				questionPage: {
					page: state.questionPage.page,
					loading: true,
					errors: false
				}
			};
		case 'FETCH_QUESTION_PAGE_SUCCESS':
			return {
				...state,
				questionPage: {
					page: action.payload,
					loading: false,
					errors: false
				}
			};
		case 'FETCH_QUESTION_PAGE_FAILURE':
			return {
				...state,
				questionPage: {
					page: null,
					loading: false,
					errors: true
				}
			};

		default:
			return state;
	};

};

export default reducer;