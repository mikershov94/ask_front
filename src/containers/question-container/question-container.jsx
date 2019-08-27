import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from './redux-components';
import {Question} from './../../components/pages';

class QuestionContainer extends React.Component {

	render() {
		console.log(this.props.match.params.id)
		const id = this.props.match.params.id;
		const questions = this.props.questions;
		console.log(questions)
	

		return(
			<Question title={questions[id].title}
								text={questions[id].text} />
		);
	}
}

export default connect(mapStateToProps)(QuestionContainer)