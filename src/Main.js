import React from 'react';
import TitleBar from './TitleBar';
import Hero from './Hero';

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			
		}

		this.receiveHeroStyle = this.receiveHeroStyle.bind(this);
	}

	receiveHeroStyle(obj) {
		this.setState(obj);
	}

	render() {
		return (
			<div>
				<TitleBar hero={this.state.hero}/>
				<Hero receiveHeroStyle={this.receiveHeroStyle}/>
			</div>
		);
	}
} 

export default Main;