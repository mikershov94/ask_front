import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
	return {
		question: state.questionPage.page,
		loading: state.questionPage.loading,
		errors: state.questionPage.errors
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	
	const { fetchQuestionPage, askService } = ownProps;

	return bindActionCreators({
		fetchQuestionPage: fetchQuestionPage(askService)
	}, dispatch);
};

export {
	mapStateToProps,
	mapDispatchToProps
}