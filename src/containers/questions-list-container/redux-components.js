import { bindActionCreators } from 'redux';
import { toggleToLatest, toggleToPopular, changePage } from './../../actions';

const mapStateToProps = (state) => {
	const pageCount = Math.floor((state.paginate.questionsCount / 5) + 1);
	return {
		page: state.questionsList.questions,
		loading: state.questionsList.loading,
		errors: state.questionsList.errors,
		sidebar: state.sidebar,
		numPage: state.paginate.numPage,
		pageCount: pageCount
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const { askService, fetchQuestions } = ownProps
	return bindActionCreators({
		fetchQuestions: fetchQuestions(askService),
		toggleToPopular,
		changePage
	}, dispatch);
};

export {
	mapStateToProps,
	mapDispatchToProps
};