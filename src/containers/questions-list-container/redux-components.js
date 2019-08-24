import { bindActionCreators } from 'redux';
import { toggleToLatest, toggleToPopular } from './../../actions';

const mapStateToProps = (state) => {
	return {
		page: state.questions,
		loading: state.loading,
		errors: state.errors,
		sidebar: state.sidebar
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const { askService, fetchQuestions } = ownProps
	return bindActionCreators({
		fetchQuestions: fetchQuestions(askService),
		toggleToPopular
	}, dispatch);
};

export {
	mapStateToProps,
	mapDispatchToProps
};