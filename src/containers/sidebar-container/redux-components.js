import { bindActionCreators } from 'redux';
import { toggleToLatest, toggleToPopular } from './../../actions';

const mapStateToProps = (state) => {
	return {
		sidebar: state.sidebar
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