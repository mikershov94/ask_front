import testData from './test-data';

class AskService {

	constructor() {

		this.data = testData;

	}

	getQuestions() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() < 0.75) {
					resolve(this.data);
				} else {
					reject(new Error('Something happened!'));
				};
			}, 700);
		});
	}

}

export default AskService;