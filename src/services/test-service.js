import testData from './test-data';

class TestService {

	constructor() {

		this.data = testData;

		
	}

	getLatestQuestions() {

		const page = this.data.latestQuestions[0];

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() < 0.75) {
					resolve(page);
				} else {
					reject(new Error('Something happened!'));
				};
			}, 700);
		});
	}

	getPopularQuestions() {
		
		const page = this.data.popularQuestions[0];

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() < 0.75) {
					resolve(page);
				} else {
					reject(new Error('Something happened!'));
				};
			}, 700)
		});
	}
}

export default TestService;