import React, { Component } from 'react';
import com from '../../pages/common/common'
import VerticalLayout from '../../sides/VerticalLayout'

var input = `
# 云校React开发BaseUI分部

## BaseUI的开发目的是

* 统一移动界面风格
* 缩短前端设计和开发周期
* 增强前端代码的稳定性和可维护性

## 进展

* 完成好分数所需要的BaseUI

## To be Done

* 规范接口
* 完成文档
* 提供UI设计和导出工具

## 呼声

需要更多的资源投入呀！！！

`;

class YxDesign extends Component {
	static get displayName() {
		return 'YX Design of React';
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