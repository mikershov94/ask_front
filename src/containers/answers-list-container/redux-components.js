const mapStateToProps = (state) => {
	return {
		answers: state.answers.data,
		loading: state.answers.loading,
		errors: state.answers.errors,
	};
};