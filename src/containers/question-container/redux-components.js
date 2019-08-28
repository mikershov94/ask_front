import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
	return {
		question: state.questionPage.page
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