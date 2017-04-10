import React, { Component } from 'react';


class HorizontalLayout extends Component{
	render(){
		var style={
			container:{
				display:'flex',
				flexDirection:'row',
				alignItems:'flex-start',
			},
		}
		return <div {...this.props} style={this.style(style.container)}>{this.props.children}</div>
	}
}
export default HorizontalLayout;