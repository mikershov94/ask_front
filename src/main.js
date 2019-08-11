import "./main.sass";
import testImage from '../public/img/img1.png';
import Icon from '../public/icons/icon.svg';

const foo = (name) => {
	console.log(`Hello ${name}`);
};

function component() {

	const element = document.createElement('div');

	const myImage = new Image();
	const myIcon = new Image();
	myImage.src = testImage;
	myIcon.src = Icon;

	element.appendChild(myImage);
	element.appendChild(myIcon);


	return element;

};



document.body.appendChild(component());

export default foo;