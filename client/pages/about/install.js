import React, { Component } from 'react';
import com from '../../pages/common/common'
import VerticalLayout from '../../sides/VerticalLayout'

var input = `
# 安装

npm install yxbaseui

`;

class YxDesign extends Component {
	static get displayName() {
		return '安装';
	}
	render() {
		var styles = {
			wrap: {
				display: 'flex',
				flexDirection: 'column',
				aligItems: 'stretch',
				alignSelf: 'stretch',
				flex: '1 0 auto',
				overflow: 'hidden'
			}
		};
		var ReactMarkdown = require('react-markdown');
		return (
			<ReactMarkdown source={input} />
		)
	}
}

export default YxDesign;