import { bindActionCreators } from 'redux';
import { toggleToLatest, toggleToPopular } from './../../actions';

const mapStateToProps = (state) => {
	return {
		latest: state.sidebar.latest,
		popular: state.sidebar.popular
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		toggleToLatest: toggleToLatest,
		toggleToPopular: toggleToPopular
	}, dispatch);
};


export {
	mapStateToProps,
	mapDispatchToProps
}