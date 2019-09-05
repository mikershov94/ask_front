const toggleToPopular = () => {
	return {
		type: 'TOGGLE_SORT_TO_POPULAR'
	};
};

const toggleToLatest = () => {
	return {
		type: 'TOGGLE_SORT_TO_LATEST'
	};
};

export {
	toggleToLatest,
	toggleToPopular
}