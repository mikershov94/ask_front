import React from 'react';
import store from './../../store';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './redux-components';
import Sidebar from './../../components/sidebar';

class SidebarContainer extends React.Component {

	render() {
		console.log(this.props.sidebar);
		const latest = this.props.latest;
		const popular = this.props.popular;
		const classLatest = latest ? "nav-link active" : "nav-link";
		const classPopular = popular ? "nav-link active": "nav-link";

		return <Sidebar latest={classLatest}
										popular={classPopular}
										sidebarClass={this.props.sidebarClass}
										toggleToLatest={this.props.toggleToLatest}
										toggleToPopular={this.props.toggleToPopular} />;
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);