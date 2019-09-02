import updateQuestionsList from './questions-list';
import updateQuestionPage from './question-page';
import updateSidebar from './sidebar';

const reducer = (state, action) => {
	return {
		questionsList: updateQuestionsList(state, action),
		questionPage: updateQuestionPage(state, action),
		sidebar: updateSidebar(state, action)
	};
};

export default reducer;