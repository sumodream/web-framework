import React, { Component } from 'react';

class VerticalLayout extends Component{
	render(){
		var props=Object.assign({},this.props);
    var style = Object.assign({}, this.props.style || {}, { flexDirection: 'row', display: 'flex' });
		delete props.style;
    style = style || {};
		return <div style={style} {...props}>{this.props.children}</div>
	}
}

export default VerticalLayout;