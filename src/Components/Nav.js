import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Nav.css';
import Logo from './Logo';
import MediaQuery from 'react-responsive';

class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.handleScroll = this.handleScroll.bind(this);
		this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
	}

	handleScroll() {
		this.setState({scroll: window.scrollY});
	}

	handleHamburgerClick(e) {
		const mobileNav = document.querySelector('.mobile-nav');
		const parentNav = document.querySelector('nav');

		mobileNav.classList.contains('visible') 
			? mobileNav.classList.remove('visible')
			: mobileNav.classList.add('visible');
		parentNav.classList.contains('open')
			? parentNav.classList.remove('open')
			: parentNav.classList.add('open');
		console.dir(mobileNav);
	}

	componentDidMount() {
		const nav = document.querySelector('nav');
		this.setState({top: nav.offsetTop, height: nav.offsetHeight});
		window.addEventListener('scroll', this.handleScroll);
	}

	componentDidUpdate() {
		const nav = document.querySelector('nav');
		this.state.scroll > this.state.top 
			? (document.body.style.paddingTop = `${this.state.height}px`, nav.classList.add('fixed-nav'))
			: (document.body.style.paddingTop = 0, nav.classList.contains('fixed-nav') ? nav.classList.remove('fixed-nav') : null);
	}

	render() {
		return (
			<div>
				<nav>
					<MediaQuery maxWidth={800}>
						<span className="toggle-nav" onClick={this.handleHamburgerClick}><span>Toggle navigation</span></span>
						<ul className="mobile-nav">
							<NavLink exact to="/" onClick={this.handleHamburgerClick}><li>Home</li></NavLink>
					    <NavLink to="/about" onClick={this.handleHamburgerClick}><li>About</li></NavLink>
					    <NavLink to="/images" onClick={this.handleHamburgerClick}><li>Images</li></NavLink>
					    <NavLink to="'locations" onClick={this.handleHamburgerClick}><li>Locations</li></NavLink>
					    <NavLink to="/blog" onClick={this.handleHamburgerClick}><li>Blog</li></NavLink>
						</ul>
					</MediaQuery>
					<MediaQuery minWidth={801}>
						<ul className="desktop-nav visible">
					    <li className="logo">
				    		<Logo />
					    </li>
					    <NavLink exact to="/"><li>Home</li></NavLink>
					    <NavLink to="/about"><li>About</li></NavLink>
					    <NavLink to="/images"><li>Images</li></NavLink>
					    <NavLink to="'locations"><li>Locations</li></NavLink>
					    <NavLink to="/blog"><li>Blog</li></NavLink>
					  </ul>
					</MediaQuery>
				</nav>
			</div>
		);
	}
}

export default Nav;