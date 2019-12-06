import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import SearchBar from "../components/SearchBar";
import Axios from "axios";

import '../styles/styles.sass'
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
				<h1 className="title">Fridge Scavenger</h1>
				<div className="search">
					<SearchBar onSubmit={onSearchSubmit} />
				</div>
			</Layout>
			<div className="recipeGrid">
				<table className="recipeResults table">
					{recipes.map(recipe => (
						<>
							<tr key={recipe.id}>
								<td>
									<img
										className="gridImage"
										src={recipe.image}
									/>
								</td>
								<td>
									<Link href="/p/[id]" as={`/p/${recipe.id}`}>
										<a className="gridLink">
											{recipe.title}
										</a>
									</Link>
								</td>
							</tr>
						</>
					))}
					<tr>
						<td>
							<img
								className="gridImage"
								src="https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024"
							/>
						</td>
						<td>
							<p className="gridLink">Sammy oh god why</p>
						</td>
					</tr>
					<tr>
						<td>
							<img
								className="gridImage"
								src="https://wp-media.patheos.com/blogs/sites/331/2013/03/bigstock-Test-word-on-white-keyboard-27134336.jpg"
							/>
						</td>
						<td>
							<p className="gridLink">
								You forced my hand, mother!
							</p>
						</td>
					</tr>
				</table>
			</div>
			{/* <style jsx>
				{`
					h1,
					.search {
						text-align: center;
					}

					.recipeGrid {
						display: grid;
						grid-template-columns: 25% auto 25%;
						grid-template-rows: auto;
						border: 1px solid #DDD;
						margin: 20px;
						padding: 20px;
					}

					li {
						text-decoration: none;
						list-style: none;
					}

					.recipeResults {
						grid-column: 2;
					}

					.gridLink {
						grid-column: 2 / 2;
					}

					.gridImage {
						width: 100px;
						height: 100px;
						display: block;
						margin-left: auto;
						margin-right: auto;
						grid-column: 2 / 2;
					}
				`}
			</style> */}
		</>
	);
};

export default Home;
