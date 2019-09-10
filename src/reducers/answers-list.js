const updateAnswers = (state, action) => {

	if (state === undefined) {
		return {
			data: [],
			loading: true,
			errors: false,
		};
	};

	switch(action.type) {
		case 'ANSWERS_LIST_REQUEST':
			return {
				data: [],
				loading: true,
				errors: false,
			};
		case 'ANSWERS_LIST_SUCCESS':
			return {
				data: action.payload,
				loading: false,
				errors: false,
			};
		case 'ANSWERS_LIST_FAILURE':
			return {
				data: [],
				loading: false,
				errors: true,
			};
		default:
			return state.answers;
	};

};

export default updateAnswers;