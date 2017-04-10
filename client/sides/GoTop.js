
import React, { Component } from 'react';

import FontIcon from './FontIcon'
import VerticalLayout from './VerticalLayout'
import color from '../../client/common/color'
class GoTop extends Component {
	constructor(props){
		super(props);
		this.state={
			active: false
		};
	}
	refresh(oldcallback,event){
		let state = document.body.scrollTop>200;
		if(this.state.active!=state){
			this.setState({
				active:state
			});
		}
		if (oldcallback) oldcallback(event);
	}
	componentDidMount(){
		var oldOnScroll = window.onscroll;
		window.onscroll = this.refresh.bind(this,oldOnScroll)
	}
	onClick(){
		if(typeof window != 'undefined'){
			window.scrollTo(0,0);
		}
	}
	render() {
		var styles = {
			go:{
				position:'fixed',
				bottom: 100,
				right: 40
			},
			icon:{
				width:14,
				height:14,
				padding: '10px 10px',
				cursor: 'pointer',
				fontSize: 14,
				backgroundColor:color.a19
			}
		};
		/* 在外层样式上调用rs以支持属性编辑器 */
		return (
			<VerticalLayout style={this.style(styles.go)}>
				{this.state.active?<span style={styles.icon} onClick={this.onClick.bind(this)} >
					<FontIcon icon={"icon-up-open-2"} style={{color:color.c01,display:'flex',justifyContent:'center'}}></FontIcon>
				</span>:null}
			</VerticalLayout>
		)
	}
}
export default GoTop;	
	
