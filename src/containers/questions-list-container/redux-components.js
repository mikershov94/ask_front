import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
	return {
		questions: state.questions,
		loading: state.loading,
		errors: state.errors
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const { askService, fetchQuestions } = ownProps
	return bindActionCreators({
		fetchQuestions: fetchQuestions(askService)
	}, dispatch);
};

export {
	mapStateToProps,
	mapDispatchToProps
};