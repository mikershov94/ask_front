const initialState = {
	questions = [],
	loading: true,
	errors: false
};

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case 'FETCH_QUESTIONS_REQUEST':
			return {
				questions: state.questions,
				loading: true,
				errors: false
			};
		case 'FETCH_QUESTIONS_SUCCESS':
			return {
				questions: action.payload,
				loading: false,
				errors: false
			};
		case 'FETCH_QUESTIONS_FAILURE':
			return {
				questions: [],
				loading: false,
				errors: true
			};
	};

};

export default reducer;