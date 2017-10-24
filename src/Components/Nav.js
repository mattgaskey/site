import React from 'react';
import '../Styles/Nav.css';
import Logo from './Logo';

class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			scroll: window.scrollY
		};

		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll() {
		console.log('scrolled');
		this.setState({scroll: window.scrollY});
	}

	componentDidMount() {
		console.log('Component mounted');
		window.addEventListener('scroll', this.handleScroll);
	}

	render() {
		return (
			<div>
				<nav className={this.state.scroll > 160 ? "fixed-nav" : ""}>
					<ul>
				    <li className="logo">
			    		<Logo />
				    </li>
				    <li>Home</li>
				    <li>About</li>
				    <li>Images</li>
				    <li>Locations</li>
				    <li>Blog</li>
				  </ul>
			  </nav>
			</div>
		);
	}
}

export default Nav;