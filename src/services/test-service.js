import testData from './test-data';

class TestService {

	constructor() {

		this.data = testData;

	}

	testLoading(data) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				//if (Math.random() < 0.75) {
					resolve(data);
				//} else {
					//reject(new Error('Something happened!'));
				//};
			}, 700);
		})
	}

	getLatestQuestions(numPage = 0) {
		const page = this.data.latestQuestions[numPage];
		return this.testLoading(page);
	}

	getPopularQuestions(numPage = 0) {
		const page = this.data.popularQuestions[numPage];
		return this.testLoading(page);
	}

	getLatestQuestionPage(idx) {
		const question = this.data.latestQuestionsList[idx-1];
		return this.testLoading(question);
	}

	getPopularQuestionPage(idx) {
		const question = this.data.popularQuestionsList[idx-1];
		return this.testLoading(question);
	}

	getAnswers(question_id) {
		const data = this.data.answers;
		let answers = [];
		data.map(answer => {
			if (answer.question_id === question_id) {
				answers.push(answer);
			};
		});
		return this.testLoading(answers);
	}
}

export default TestService;