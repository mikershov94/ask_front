import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './redux-components';
import Sidebar from './../../components/sidebar';

class SidebarContainer extends React.Component {

	render() {
		const classLatest = this.props.latest ? "nav-link active" : "nav-link";
		const classPopular = this.props.popular ? "nav-link active": "nav-link";

		return <Sidebar latest={classLatest}
										popular={classPopular}
										sidebarClass={this.props.sidebarClass}
										toggleToLatest={this.props.toggleToLatest}
										toggleToPopular={this.props.toggleToPopular} />;
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);