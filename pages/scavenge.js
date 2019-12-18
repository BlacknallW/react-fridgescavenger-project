import React, { useState } from "react";
import Link from "next/link";
import Axios from "axios";
import uuidv4 from "uuid/v4";

import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";

const Scavenge = () => {
	const [recipes, setRecipes] = useState([]);

	const onSearchSubmit = async term => {
		const res = await Axios.get(
			`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${term}&number=50&apiKey=cbdb4c6c328541689e7db2d210a6b528`
		);

		setRecipes(res.data);
	};
	return (
		<>
			<Layout>
				<section className="hero is-info" style={{ opacity: 0.5 }}>
					<div className="hero-body">
						<div className="container has-text-centered">
							<h1 className="title">Scavenge</h1>
							<p className="subtitle">
								Find recipes based on ingredients you already
								own!
							</p>
						</div>
					</div>
				</section>

				<div className="body is-flex-touch">
					<section className="section">
						<div className="box">
							<SearchBar
								onSubmit={onSearchSubmit}
								placeholder="Type in your ingredients, separated by commas."
							/>
						</div>
						<div className="grid-container">
							<div className="recipes-box">
								{recipes.map(recipe => (
									<>
										<div
											className="tile is-ancestor box"
											key={recipe.id}
										>
											<div className="tile">
												<div className="content">
													<figure className="image">
														<img
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

export default Scavenge;
