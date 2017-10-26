import React from 'react';
import '../Styles/Nav.css';
import Logo from './Logo';

class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll() {
		this.setState({scroll: window.scrollY});
	}

	componentDidMount() {
		const el = document.querySelector('nav');
		this.setState({top: el.offsetTop, height: el.offsetHeight});
		window.addEventListener('scroll', this.handleScroll);
	}

	componentDidUpdate() {
		this.state.scroll > this.state.top ? 
			document.body.style.paddingTop = `${this.state.height}px` :
			document.body.style.paddingTop = 0;
	}

	render() {
		return (
			<div>
				<nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
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