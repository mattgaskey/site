import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Header from './Header';
import Blogpost from './Blogpost';
import '../index.css';

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<div>
				<Header />
				<Nav />
				<Hero />
			</div>
		);
	}
} 

export default Main;