import React from 'react';
import { NavLink } from 'react-router-dom';
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
				    <NavLink exact to="/"><li>Home</li></NavLink>
				    <NavLink to="/about"><li>About</li></NavLink>
				    <NavLink to="/images"><li>Images</li></NavLink>
				    <NavLink to="'locations"><li>Locations</li></NavLink>
				    <NavLink to="/blog"><li>Blog</li></NavLink>
				  </ul>
			  </nav>
			</div>
		);
	}
}

export default Nav;