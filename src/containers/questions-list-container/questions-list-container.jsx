import React from 'react';
import { connect } from 'react-redux';
import { compose } from './../../utils';
import { withAskService } from './../../components/hoc';
import { mapStateToProps, mapDispatchToProps } from './redux-components';
import Spinner from './../../components/spinner';
import ErrorIndicator from './../../components/error-indicator';
import QuestionsList from './../../components/questions-list';

class QuestionsListContainer extends React.Component {

	componentDidMount() {
		if ((this.props.url === '/popular') && !this.props.sidebar.popular) {
			this.props.toggleToPopular();
		};
		
		this.props.fetchQuestions();
	}

	render() {
		const {
			pages,
			loading,
			errors
		} = this.props;

		if (loading) {
			return <Spinner />;
		};

		if (errors) {
			return <ErrorIndicator />;
		};

		return <QuestionsList questions={questions} />;
	}

};

export default compose(withAskService(),
											 connect(mapStateToProps, mapDispatchToProps)
												)(QuestionsListContainer);