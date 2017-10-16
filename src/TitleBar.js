import React from 'react';
import AppBar from 'material-ui/AppBar';

class TitleBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scrollY: window.scrollY
		}

		this.onScroll = this.onScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	onScroll() {
		this.setState({
			scrollY: window.scrollY
		});
	}

	render() {
		
		return (
			<AppBar 
				title="Matt Gaskey"
				iconClassNameRight="muidocs-icon-navigation-expand-more"
				style={
					{boxShadow: 'none',
					position: this.state.scrollY <= 400 ? 'fixed' : 'relative',
					transition: 'text-align 1s ease-in-out'}
				}
				titleStyle={
					{textAlign: this.state.scrollY >= 64 ? 'center' : 'left'}
				}
			/>
		);
	}

} 

export default TitleBar;