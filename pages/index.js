import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import SearchBar from "../components/SearchBar";
import Axios from "axios";

import Layout from "../components/MyLayout";

const Home = () => {
	const [recipes, setRecipes] = useState([]);

	const onSearchSubmit = async term => {
		const res = await Axios.get(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=cbdb4c6c328541689e7db2d210a6b528&query=${term}&number=10&instructionsRequired=true`
		);

		setRecipes(res.data.results);
	};

	return (
		<>
			<Layout>
				<Head>
					<title>FridgeScavenger</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<h1>Fridge Scavenger</h1>
				<div className="search">
					<SearchBar onSubmit={onSearchSubmit} />
				</div>
			</Layout>
			<div className="recipeResults">
				<ol>
					{recipes.map(recipe => (
						<li key={recipe.id}>
							<img src={recipe.image} />
							<Link href="/p/[id]" as={`/p/${recipe.id}`}>
								<a>{recipe.title}</a>
							</Link>
						</li>
					))}
					<li>
						<img src="https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024" />
						<p>Sammy oh god why</p>
					</li>
					<li>
						<img src="https://wp-media.patheos.com/blogs/sites/331/2013/03/bigstock-Test-word-on-white-keyboard-27134336.jpg" />
						<p>You forced my hand, mother!</p>
					</li>
				</ol>
			</div>
			<style jsx>
				{`
					h1,
					.search,
					.recipeResults {
						text-align: center;
					}

					li {
						text-decoration: none;
						list-style: none;
					}

					li a {
						float: right;
					}

					li img {
						width: 100px;
						height: 100px;
						display: block;
						margin-left: auto;
						margin-right: auto;
					}
				`}
			</style>
		</>
	);
};

export default Home;
