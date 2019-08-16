import React from 'react';
import ErrorIndicator from './../error-indicator';

class ErrorBondary extends React.Component {
	constructor() {
		super();
		this.state = {
			hasErrors: false,
		};

	}

	componentDidCatch() {
		this.setState(state => {
			hasErrors: true,
		});
	}

	render() {
		if (this.state.hasErrors) {
			return <ErrorIndicator />;
		} else {
			return this.props.children;
		}
	}

}

export default ErrorBondary;