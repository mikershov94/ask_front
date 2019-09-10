import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
	return {
		answers: state.answers.data,
		loading: state.answers.loading,
		errors: state.answers.errors,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const { askService } = ownProps;
	return bindActionCreators({
		fetchAnswers: fetchAnswers(askService);
	}, dispatch);
};

export {
	mapStateToProps,
	mapDispatchToProps
}