import updateQuestionsList from './questions-list';
import updateQuestionPage from './question-page';
import updatePaginator from './paginate';
import updateSidebar from './sidebar';

const reducer = (state, action) => {
	return {
		questionsList: updateQuestionsList(state, action),
		questionPage: updateQuestionPage(state, action),
		paginate: updatePaginator(state, action),
		sidebar: updateSidebar(state, action)
	};
};

export default reducer;