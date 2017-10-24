import React from 'react';
import '../Styles/Nav.css';
import Logo from './Logo';

const Nav = () => {
	return (
		<div>
			<nav>
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

export default Nav;