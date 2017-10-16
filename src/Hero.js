import React from 'react';
import {
	lightBlue500
} from 'material-ui/styles/colors';

const style = {
			width: '100vw',
			height: '400px',
			margin: '0 auto',
			textAlign: 'center',
			position: 'absolute',
			top: '0',
			left: '0',
			background: lightBlue500
		}; 

class Hero extends React.Component {

	componentDidMount() {
		this.props.receiveHeroStyle({hero: style});
	}

	render() {

		return (
			<div style={style}>

			</div>
		);
	}
}

export default Hero;