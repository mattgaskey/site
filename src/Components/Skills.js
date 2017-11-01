import React from 'react';
import '../Styles/Skills.css';
import js from "../assets/js.png";
import react from "../assets/react.svg";
import css from "../assets/css.png";
import node from "../assets/node.svg";
import npm from "../assets/npm.png";
import git from "../assets/git.png";


const Skills = () => {
	return (
		<div className="skills">
			<h2>A few of my favorite things</h2>
			<ul className='container__skills'>
				<li>
					<div className="image_holder"><img src={js} alt="JavaScript logo" /></div>
					<h3>JavaScript</h3>
					<p>I love JavaScript. It may not be the sexiest programming language out there, but it's definitely the one most websites can't live without.</p>
				</li>
				<li>
					<div className="image_holder"><img src={react} alt="React.js logo" /></div>
					<h3>React</h3>
					<p>React is an amazing framework. Having modular, stateful components is a powerful tool for any developer, and React is one of the easiest to work with.</p>
				</li>
				<li>
					<div className="image_holder"><img src={css} alt="CSS3 logo" /></div>
					<h3>CSS</h3>
					<p>A lot of developers turn their noses up at CSS, but I thouroughly enjoy digging into stylesheets and am often amazed at the possibilites with pure CSS.</p>
				</li>
				<li>
					<div className="image_holder"><img src={node} alt="Node.js logo" /></div>
					<h3>Node</h3>
					<p>Node is really opening a lot of doors for JavaScript developers, especially for those of us who have only focused on Front-End.  Node lets us delve into the murky waters of server-side scripting.</p>
				</li>
				<li>
					<div className="image_holder"><img src={npm} alt="npm logo" /></div>
					<h3>npm</h3>
					<p>For anyone working with modules or frameworks, npm can be a godsend.  It can also be abused. However you see it, it's undeniable that npm is an invaluable tool in the developer's kit.</p>
				</li>
				<li>
					<div className="image_holder"><img src={git} alt="git logo" /></div>
					<h3>git</h3>
					<p>Version control may be one of the most important steps in the development process.  A strong understanding of git a great way to ensure progressive and interative processes, as well as collaboration.</p>
				</li>
			</ul>
		</div>
	);
}

export default Skills;