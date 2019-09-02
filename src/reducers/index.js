const initialState = {
	
	questionPage: {
		page: null,
		loading: true,
		errors: false
	},
	
	paginate: {
		numPage: 0,
	},
};

const reducer = (state = initialState, action) => {

	switch (action.type) {
		

		

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