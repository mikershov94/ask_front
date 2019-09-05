import testData from './test-data';

class TestService {

	constructor() {

		this.data = testData;

		
	}

	getLatestQuestions(numPage = 0) {

		const page = this.data.latestQuestions[numPage];

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				//if (Math.random() < 0.75) {
					resolve(page);
				//} else {
				//	reject(new Error('Something happened!'));
				//};
			}, 700);
		});
	}

	getPopularQuestions(numPage = 0) {
		
		const page = this.data.popularQuestions[numPage];

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				//if (Math.random() < 0.75) {
					resolve(page);
				//} else {
				//	reject(new Error('Something happened!'));
				//};
			}, 700)
		});
	}

	getLatestQuestionPage(idx) {

		const question = this.data.latestQuestionsList[idx-1];

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				//if (Math.random() < 0.75) {
					resolve(question);
				//} else {
				//	reject(new Error('Something happened!'));
				//};
			}, 700);
		});

	}

	getPopularQuestionPage(idx) {

		const question = this.data.popularQuestionsList[idx-1];

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				//if (Math.random() < 0.75) {
					resolve(question);
				//} else {
				//	reject(new Error('Something happened!'));
				//};
			}, 700);
		});
	}
}

export default TestService;