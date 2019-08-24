import testData from './test-data';

class TestService {

	constructor() {

		this.data = testData;

		
	}

	getLatestQuestions() {
		const dateSort = (a, b) => {
			if (a.date > b.date) {
				return -1;
			}
			if (a.date < b.date) {
				return 1;
			}

			return 0;
		};

		const page = this.data.questions[0];

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
		const ratingSort = (a, b) => {
			if (a.rating > b.rating) {
				return -1;
			};
			if (a.rating < b.rating) {
				return 1;
			};

			return 0;
		};

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() < 0.75) {
					resolve(this.data.questions.sort(ratingSort));
				} else {
					reject(new Error('Something happened!'));
				};
			}, 700)
		});
	}
}

export default TestService;