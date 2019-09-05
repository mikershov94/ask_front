import { bindActionCreators } from 'redux';
import { toggleToPopular } from './../../actions';

const mapStateToProps = (state) => {
	return {
		question: state.questionPage.page,
		loading: state.questionPage.loading,
		errors: state.questionPage.errors,
		numPage: state.questionsList.numPage,
		sidebar: state.sidebar
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	
	const { fetchQuestionPage, askService } = ownProps;

	return bindActionCreators({
		fetchQuestionPage: fetchQuestionPage(askService),
		toggleToPopular
	}, dispatch);
};

export {
	mapStateToProps,
	mapDispatchToProps
}