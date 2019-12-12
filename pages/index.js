import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Axios from "axios";
import uuidv4 from "uuid/v4";

import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/styles.sass";
import ArticleCard from "../components/ArticleCard";

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
			<NavBar />
			<Head>
				<title>FridgeScavenger</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section className="hero is-info">
				<div className="hero-body">
					<div className="container has-text-centered">
						<figure>
							<img
								src="https://i.imgur.com/q2PWaEs.png"
								width="300px"
								height="300px"
							/>
						</figure>
					</div>
				</div>
			</section>

			<div className="body">
				<section className="section">
					<div className="box">
						<SearchBar
							onSubmit={onSearchSubmit}
							placeholder="What do you want to make today?"
						/>
					</div>

					{recipes.map(recipe => (
						<>
							<div className="tile is-ancestor box">
								<div className="tile">
									<div className="content">
										<figure>
											<img
												key={recipe.id}
												className="image"
												className="gridImage"
												src={recipe.image}
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
											<a
												key={uuidv4()}
												className="gridLink"
											>
												{recipe.title}
											</a>
										</Link>
									</div>
								</div>
							</div>
						</>
					))}
					<div className="articles">
						<ArticleCard />
					</div>
				</section>
			</div>
			<div className="footer">
				<Footer />
			</div>
			<style jsx>
				{
					"html, .body {height:100%; margin:0;} .footer{height:50px;} .body{display: flex; flex-direction:column} footer{margin-top:auto;}"
				}
			</style>
		</>
	);
};

export default Home;
