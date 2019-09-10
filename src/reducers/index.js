import updateQuestionsList from './questions-list';
import updateQuestionPage from './question-page';
import updateSidebar from './sidebar';
import updateAnswers from './answers-list';

const reducer = (state, action) => {
	return {
		questionsList: updateQuestionsList(state, action),
		questionPage: updateQuestionPage(state, action),
		sidebar: updateSidebar(state, action),
		answers: updateAnswers(state, action),
	};
};

export default reducer;