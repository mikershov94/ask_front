const updatePaginator = (state, action) => {

	if (state === undefined) {
		return {
			...state,
			paginate: {
				numPage: 0
			}
		};
	};

	switch (action.type) {
		case 'CHANGE_PAGE':
			return {
				...state,
				paginate: {
					...state,
					numPage: action.payload
				}
			};
	};

};

export default updatePaginator;