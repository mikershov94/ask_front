const updateSidebar = (state, action) => {
	
	if (state === undefined) {
		return {
			latest: true,
			popular: false
		};
	};

	switch (action.type) {
		case 'TOGGLE_SORT_TO_POPULAR':
			return {
				latest: false,
				popular: true
			};
		case 'TOGGLE_SORT_TO_LATEST':
			return {
				latest: true,
				popular: false,
			};
		default:
			return state.sidebar;
	};

};

export default updateSidebar;