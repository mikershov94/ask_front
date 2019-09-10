import {
	fetchLatestQuestions,
	fetchPopularQuestions,
	changePage
} from './questions-list';
import {
	fetchLatestQuestionPage,
	fetchPopularQuestionPage
} from './question-page';
import {
	toggleToLatest,
	toggleToPopular
} from './sidebar';
import {
	fetchAnswers
} from './answers-list';

export {
	fetchLatestQuestions,
	fetchPopularQuestions,
	toggleToLatest,
	toggleToPopular,
	changePage,
	fetchLatestQuestionPage,
	fetchPopularQuestionPage,
	fetchAnswers,
};