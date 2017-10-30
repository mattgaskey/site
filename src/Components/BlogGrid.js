import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import '../Styles/BlogGrid.css';

class BlogGrid extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			blogposts: null
		}
	}

	componentDidMount() {
		const blogpostSrc = 'blogposts.json';
		fetch(blogpostSrc)	
			.then(res => res.json())
			.then(blogposts => this.setState({blogposts}));
	}

	render() {

		return (
			<div>
			{!this.state.blogposts
				? <Loading />
				: <div className="container__blogs">
						{this.state.blogposts.posts.map((post, i) => {
							const titleSlug = post.title.replace(/\s/g, '_');
							return (
								<div key={i} className="blog__item">
									<div className="blog__item-title">
										<div className="blog__item-title-text">{post.title}</div>
										<div className="blog__item-date">{post.date}</div>
									</div>
									<div className="blog__item-snippet">{post.snippet}</div>
									<div className="blog__item-link">
									<Link to={{pathname: `/blog/${post.postID}/${titleSlug}`, content: post.content}}
									>Read more &rarr;</Link>
									</div>
								</div>
							)
						})}
					</div>
			}
			</div>
		)
	}
}

export default BlogGrid;