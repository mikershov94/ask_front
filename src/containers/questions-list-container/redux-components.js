import { bindActionCreators } from 'redux';
import { toggleToLatest, toggleToPopular, changePage } from './../../actions';

const mapStateToProps = (state) => {
	return {
		page: state.questions,
		loading: state.loading,
		errors: state.errors,
		sidebar: state.sidebar,
		numPage: state.numPage
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