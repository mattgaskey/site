import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Index from './Index';
import Header from './Header';
import BlogGrid from './BlogGrid';
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
				<Route exact path="/" component={Index} />
				<Route exact path="/blog" component={BlogGrid} />
				<Route path="/blog/:id/:titleSlug" component={Blogpost} />
			</div>
		);
	}
} 

export default Main;