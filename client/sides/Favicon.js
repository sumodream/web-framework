
import React, { Component } from 'react';
class Favicon extends Component{
	static get propTypes(){
		return {
			src: React.PropTypes.string,
			size: React.PropTypes.number
		}
	}
	static get defaultProps() {
		return {
			src:'/images/icon-face.png',
			size:40
		};
	}
	render() {
		var styles = {
			divstyle:{
				display:'flex',
				justifyContent:'center',
				alignItem:'center',
				width: this.props.size,
				height: this.props.size,
				borderRadius: '50%',
				overflow:'hidden'
			},
			imgstyle:{
				width: this.props.size,
				minHeight: this.props.size
			}
		}

		return (
			<div style={this.style(styles.divstyle)}>
				<img style={styles.imgstyle} src={this.props.src}  />
			</div>
			);
	}
}
export default Favicon;