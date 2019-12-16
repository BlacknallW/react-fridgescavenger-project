import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Axios from "axios";
import uuidv4 from "uuid/v4";

import SearchBar from "../components/SearchBar";
import Layout from "../components/Layout"
import Footer from "../components/Footer";
// import "../styles/styles.sass";
import ArticleCard from "../components/ArticleCard";
import database from "../lib/db.js";

const Home = () => {
	const [recipes, setRecipes] = useState([]);

	const onSearchSubmit = async term => {
		const res = await Axios.get(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=cbdb4c6c328541689e7db2d210a6b528&query=${term}&number=20&instructionsRequired=true`
		);

		setRecipes(res.data.results);
	};

	return (
		<>
		<Layout>
			<section className="hero is-info" style={{ opacity: 0.5 }}>
				<div className="hero-body">
					<div className="container has-text-centered">
						<p className="title">Fridge Scavenger</p>
						<p className="subtitle">What's in the fridge?</p>
					</div>
				</div>
			</section>
			<p></p>
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
															marginLeft: "auto",
															marginRight: "auto",
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
