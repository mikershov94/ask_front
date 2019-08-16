import testData from './test-data';

class AskService {

	constructor() {

		this.data = testData;

	}

	getQuestions() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(this.data);
			}, 700);
		});
	}

}

export default AskService;