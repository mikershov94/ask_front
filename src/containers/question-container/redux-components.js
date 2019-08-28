import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
	return {
		questions: state.questions.results
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	
	const { fetchQuestionPage } = ownProps;

	return bindActionCreators({
		fetchQuestionPage: fetchQuestionPage();
	}, dispatch);
};

export {
	mapStateToProps
}