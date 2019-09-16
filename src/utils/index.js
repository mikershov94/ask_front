const compose = (...funcs) => (comp) => {
	return funcs.reduceRight((prevResult, f) => f(prevResult), comp);
};

const validateDate = (int) => {
	const string = String(int);
	if (int < 10) {
		return('0'+string);
	}
	return string;
};

export {
	compose,
	validateDate,
}