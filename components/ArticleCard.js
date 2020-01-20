import React, { useState, useEffect } from "react";
import Axios from "axios";



export default function ArticleCard() {
	const [articleList, setArticles] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await Axios.get(
				`https://newsapi.org/v2/everything?q=cooking&apiKey=5373ce724dd440c28b09430e811d8def&pageSize=5`
			);

			const articles = res.data.articles;
			setArticles(articles);
		})();
	}, []);

	return (
		<>
			<div className="tile is-vertical is-flex-touch">
				{articleList.map((article, index) => (
					<>
						<div className="card" key={index}>
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
						<br />
					</>
				))}
			</div>
		</>
	);
}
