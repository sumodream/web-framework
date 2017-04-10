import React, { Component } from 'react';
import com from '../../pages/common/common'
import VerticalLayout from '../../sides/VerticalLayout'

var input = `
# 更新日志

我那迟迟不能发布的Release 1.0 呀!

`;

class YxDesign extends Component {
	static get displayName() {
		return '更新日志';
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