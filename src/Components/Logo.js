import React from 'react';
import '../Styles/Logo.css';

class Logo extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const line = document.querySelector(".heart-rate__line");

		let totalLength = 0;
		let prevPos;

		for (let i = 0; i < line.points.numberOfItems; i++) {
			let pos = line.points.getItem(i);
			if (i > 0) {
				totalLength += Math.sqrt(
					Math.pow(pos.x - prevPos.x, 2) + Math.pow(pos.y - prevPos.y, 2)
				);
			}
			prevPos = pos;
		}

		line.style.strokeDasharray = `${totalLength} ${totalLength}`;
		line.style.strokeDashoffset = totalLength;

		const heartBeat = setInterval(function() {
			line.style.strokeDashoffset -= totalLength;
		}, 1500);
	}

	render() {
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
}

export default Logo;