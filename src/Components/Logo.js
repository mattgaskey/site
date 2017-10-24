import React from 'react';
import '../Styles/Logo.css';

const Logo = () => {
	return (
		<div className="heart-rate">
			<svg 
				width="160px"
				height="72px"
			>
				<polyline 
				fill="none" 
				stroke="#1565c0" 
				strokeWidth="5"
				strokeLinejoin="round"
				points="0,36 40,36 50,68.4 50,3.6 80,46.8 110,3.6 110,68.4 120,36 160,36"
				className="heart-rate__line"
				/>
			</svg>
		</div>
	);
}

export default Logo;