import React, { useState, useEffect } from "react";
import Link from "next/link";
import Axios from "axios";
import uuidv4 from "uuid/v4";
import cookies from "next-cookies"

import SearchBar from "../components/SearchBar";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";

const Home = (props) => {
	const [recipes, setRecipes] = useState([]);

	const onSearchSubmit = async term => {
		const res = await Axios.get(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=aeeadf9c72f14c55befd99ff1e40a70d&query=${term}&number=30&instructionsRequired=true`
		);

		setRecipes(res.data.results);
	};

	return (
		<>
			<Layout account={props.account}>
				<section className="hero is-info" style={{ opacity: 0.5 }}>
					<div className="hero-body">
						<div className="container has-text-centered">
							<p className="title">Fridge Scavenger</p>
							<p className="subtitle">What's in the fridge?</p>
						</div>
					</div>
				</section>
				<div className="body is-flex-touch">
					<section className="section">
						<div className="box">
							<SearchBar
								onSubmit={onSearchSubmit}
								placeholder="What do you want to make today?"
							/>
						</div>
						<div className="grid-container">
							<div className="recipes-box">
								{recipes.map(recipe => (
									<>
										<div className="tile is-ancestor box">
											<div className="tile">
												<div className="content">
													<figure>
														<img
															key={recipe.id}
															className="image"
															src={recipe.image}
															style={{
																borderRadius: 10,
																marginLeft:
																	"auto",
																marginRight:
																	"auto",
																display: "block"
															}}
														/>
													</figure>
												</div>
											</div>
											<div className="tile">
												<div className="content">
													<Link
														href="/p/[id]"
														as={`/p/${recipe.id}`}
													>
														<a key={uuidv4()}>
															<p className="has-text-centered">
																{recipe.title}
															</p>
														</a>
													</Link>
												</div>
											</div>
										</div>
									</>
								))}
							</div>
							<div className="articles">
								<ArticleCard />
							</div>
						</div>
					</section>
				</div>
				<div className="footer">
					<Footer />
				</div>
			</Layout>
			<style jsx>
				{`
					html,
					.body {
						height: 100%;
						margin: 0;
					}
					.footer {
						height: 50px;
					}
					.body {
						display: flex;
						flex-direction: column;
					}
					footer {
						margin-top: auto;
					}
					.grid-container {
						display: grid;
						grid-template-columns: 80% 1% auto;
						grid-template-rows: auto;
					}
					.articles {
						grid-column: 3/3;
					}
					.recipes {
						grid-column: 1/1;
					}
					.body {
						font-family: "Dosis", sans-serif;
						font-size: 20px;
						background-image: url("https://i.imgur.com/X4qREVj.jpg");
						background-repeat: no-repeat;
						background-attachment: fixed;
						background-size: cover;
					}
				`}
			</style>
		</>
	);
};

export default Home;

Home.getInitialProps = (ctx) => {
	return {
		account: cookies(ctx).account || "",
		token: cookies(ctx).token || ""
	};
}