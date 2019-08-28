import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './redux-components';
import QuestionDetails from './../../components/question-details';

class QuestionContainer extends React.Component {

	componentDidMount() {
		const idx = this.props.idx;
		this.props.fetchQuestionPage(idx);
	}

	render() {
		const question = this.props.question;

		return(
			<QuestionDetails title={question.title}
											 text={question.text} />
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer)