import React from 'react';
import '../Styles/Hero.css';

const Hero = () => {

	return (
		<div className="hero">
	  	<div className="container__coder">
	  		<h2 className="hero__title">&lt;coder&gt;</h2>
	  		<p>I like building apps, websites and games.  At the moment, I'm really digging deep into CSS, SVG and ES6, trying to make the most out of the technologies that run the Web.  I build daily snippets, keep up my GitHub repositories, and write blog posts to share what I do.</p>
	  	</div>
	  	<div className="container__avatar">
		  	<div className="circle">
		    	<div className="avatar">
		      	<div className="head"></div>
		      	<div className="hair">
		        	<div className="hair-block"> 
		         	 <div className="hair-round"></div>
		        	</div>
		      	</div>
			      <div className="ear"></div>
			      <div className="glasses">
			        <div className="temple"></div>
			      </div>
			      <div className="nose"></div>
			      <div className="mouth"></div>
			      <div className="neck"></div>
			      <div className="shirt"></div>
			    </div>
			  </div>
			</div>
			<div className="container__analyst">
				<h2 className="hero__title">&lt;analyst&gt;</h2>
		  	<p>My background and training are centered around analytics.  If it's worth putting on the Web, it's worth knowing what users are doing with it.  I am Google Analytics certified and a master Tag Manager wrangler.  I like clean implementations that let the data flow!</p>
		  </div>
		</div>
	);
}

export default Hero;