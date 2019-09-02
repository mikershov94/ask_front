const updatePaginator = (state, action) => {

	if (state === undefined) {
		return {
			numPage: 0
		};
	};

	switch (action.type) {
		case 'CHANGE_PAGE':
			return {	
				numPage: action.payload
			};
	};

};

export default updatePaginator;