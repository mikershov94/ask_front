import { bindActionCreators } from 'redux';
import { toggleToLatest, toggleToPopular, changePage } from './../../actions';

const mapStateToProps = (state) => {
	const pageCount = Math.floor((state.questionsCount / 5) + 1);
	return {
		page: state.questions,
		loading: state.loading,
		errors: state.errors,
		sidebar: state.sidebar,
		numPage: state.numPage,
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