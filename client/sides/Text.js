
import React, { Component } from 'react';
class Text extends Component{
	render(){
		return <span {...this.props}>{this.props.children}</span>
	}
}
export default Text;