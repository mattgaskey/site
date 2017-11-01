import React from 'react';
import '../Styles/Blogpost.css';
//import Pen from './Pen';
import Loading from './Loading';

const Blogpost = (props) => (
	<div>
		{!props.location.content
			? <Loading />
			: <div dangerouslySetInnerHTML={{__html: props.location.content}}>
				</div>
		}
	</div>
);

export default Blogpost;