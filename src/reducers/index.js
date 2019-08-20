const initialState = {
	questions: [],
	loading: true,
	errors: false,
	sidebar: {
		latest: true,
		popular: false
	}
};

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case 'FETCH_QUESTIONS_REQUEST':
			return {
				...state,
				questions: state.questions,
				loading: true,
				errors: false
			};
		case 'FETCH_QUESTIONS_SUCCESS':
			return {
				...state,
				questions: action.payload,
				loading: false,
				errors: false
			};
		case 'FETCH_QUESTIONS_FAILURE':
			return {
				...state,
				questions: [],
				loading: false,
				errors: true
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

		default:
			return state;
	};

};

export default reducer;