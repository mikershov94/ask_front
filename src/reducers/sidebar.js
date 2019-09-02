const updateSidebar = (state, action) => {

	if (state === undefined) {
		return {
			...state,
			sidebar: {
				latest: true,
				popular: false
			}
		};
	};

	switch (action.type) {
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
	};

};

export default updateSidebar;