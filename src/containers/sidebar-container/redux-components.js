const mapStateToProps = (state) => {
	return {
		latest: state.sidebar.latest,
		popular: state.sidebar.popular
	};
};


export {
	mapStateToProps,
}