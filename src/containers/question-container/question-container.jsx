import React from 'react';
import { connect } from 'react-redux';
import { compose } from './../../utils';
import { mapStateToProps, mapDispatchToProps } from './redux-components';
import { withAskService } from './../../components/hoc';
import QuestionDetails from './../../components/question-details';
import Spinner from './../../components/spinner';
import ErrorIndicator from './../../components/error-indicator';
import AnswersListContainer from './../../containers/answers-list-container';

class QuestionContainer extends React.Component {

	componentDidMount() {
		if ((this.props.path === '/popular/:idx') && !this.props.sidebar.popular) {
			this.props.toggleToPopular();
		};

		const numPage = this.props.numPage;
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
			<div>
				<QuestionDetails question={question} />
				<AnswersListContainer question_id={question.id} />
			</div>
		);
	}
}

export default compose(withAskService(),
											 connect(mapStateToProps, mapDispatchToProps))
											 (QuestionContainer);