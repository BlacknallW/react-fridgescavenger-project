import React, { useState, useEffect } from "react";
import Axios from "axios";

import "../styles/styles.sass";

useEffect(() => {
    
    return () => {
        cleanup
    };
}, [input])

export default function ArticleCard(props) {
	return (
		<>
			{props.articles.map(article => (
				<div className="card box section" style={{}}>
					<div className="card-image">
						<a
							href={article.url}
							target="_blank"
							rel="noreferrer noopener"
						>
							<figure className="image is-4by3">
								<img
									src={article.urlToImage}
									alt="Article caption"
								/>
							</figure>
						</a>
					</div>
					<div className="card-content">
						<div className="media">
							<div className="media-content">
								<a
									href={article.url}
									target="_blank"
									rel="noreferrer noopener"
								>
									<p className="title is-4">
										{article.title}
									</p>
								</a>
								<p className="subtitle is-6">
									{article.author}
								</p>
							</div>
						</div>

						<div className="content">
							{article.description}
							<br />
							<p>{article.source.name}</p>
						</div>
					</div>
				</div>
			))}
		</>
	);
}

Test.getInitialProps = async () => {
	const res = await Axios.get(
		`https://newsapi.org/v2/everything?q=cooking&sortBy=relevancy&apiKey=2412b7d48fe045f08fc92bc9140f561a`
	);

	const articles = res.data.articles;

	console.log(typeof articles);
	return { articles };
};
