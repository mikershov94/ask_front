import React from 'react';
import { connect } from 'react-redux';
import { compose } from './../../utils';
import { withAskService } from './../../components/hoc';
import { mapStateToProps, mapDispatchToProps } from './redux-components';
import Spinner from './../../components/spinner';
import ErrorIndicator from './../../components/error-indicator';
import AnswersList from './../../components/answers-list';

import './answers-list-container.sass';

class AnswersListContainer extends React.Component {

	componentDidMount() {
		this.props.fetchAnswers(this.props.question_id);
	}

	render() {
		const { answers, loading, errors } = this.props;

		if (loading) {
			return (
				<div className="wrapper-answer">
					<Spinner />
				</div>
			);
		};

		if (errors) {
			return (
				<div className="wrapper-answer">
					<ErrorIndicator />
				</div>
			);
		};

		return <AnswersList answers={answers} />;
	}
};

export default compose(withAskService(),
											 connect(mapStateToProps, mapDispatchToProps))
											(AnswersListContainer);