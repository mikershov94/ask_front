const mapStateToProps = (state) => {
	return {
		questions: state.questions.results
	};
};

export {
	mapStateToProps
}