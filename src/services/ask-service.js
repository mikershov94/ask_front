import testData from './test-data';

class AskService {

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

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() < 0.75) {
					resolve(this.data.questions.sort(dateSort));
				} else {
					reject(new Error('Something happened!'));
				};
			}, 700);
		});
	}

}

export default AskService;