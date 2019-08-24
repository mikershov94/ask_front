import React from 'react';
import Paginator from 'react-paginate'
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
			page,
			loading,
			errors
		} = this.props;

		const pageCount = Math.floor((page.count / 5) + 1)

		if (loading) {
			return <Spinner />;
		};

		if (errors) {
			return <ErrorIndicator />;
		};

		return (
			<div>
				<QuestionsList questions={page.results} />
				<div className="d-flex justify-content-center">
					<Paginator previousLabel={'Пред.'}
					           nextLabel={'След.'}
					           breakLabel={'...'}
					           breakClassName={"break-me"}
					           pageCount={pageCount}
					           marginPagesDisplayed={2}
					           pageRangeDisplayed={1}
					           onPageChange={this.handlePageClick}
					           containerClassName={"pagination"}
					           breakClassName={"page-item"}
					           breakLinkClassName={"page-link"}
					           pageClassName={"page-item"}
					           pageLinkClassName={"page-link"}
					           previousClassName={"page-item"}
					           previousLinkClassName={"page-link"}
					           nextClassName={"page-item"}
					           nextLinkClassName={"page-link"}
					           activeClassName={"active"} />
			</div>
				</div>
		);
	}

};

export default compose(withAskService(),
											 connect(mapStateToProps, mapDispatchToProps)
												)(QuestionsListContainer);