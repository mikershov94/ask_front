import React from 'react';
import { connect } from 'react-redux';
import { compose } from './../../utils';
import { mapStateToProps, mapDispatchToProps } from './redux-components';
import { withAskService } from './../../components/hoc';
import QuestionDetails from './../../components/question-details';
import Spinner from './../../components/spinner';
import ErrorIndicator from './../../components/error-indicator';

class QuestionContainer extends React.Component {

	componentDidMount() {
		const idx = this.props.idx;
		this.props.fetchQuestionPage(idx);
	}

	render() {
		const { question, loading, errors } = this.props;

		if (loading) {
			return <Spinner />;
		};

		if (errors) {
			return <ErrorIndicator />;
		};

		return(
			<QuestionDetails title={question.title}
											 text={question.text} />
		);
	}
}

export default compose(withAskService(),
											 connect(mapStateToProps, mapDispatchToProps))
											 (QuestionContainer);