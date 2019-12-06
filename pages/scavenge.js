import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import SearchBar from "../components/SearchBar";
import Axios from "axios";
import NavBar from "../components/NavBar";

import "../styles/styles.sass";

const Scavenge = () => {
	const [recipes, setRecipes] = useState([]);

	const onSearchSubmit = async term => {
		const res = await Axios.get(
			`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${term}&number=20&apiKey=cbdb4c6c328541689e7db2d210a6b528`
		);

        setRecipes(res.data);
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
						<h1 className="title">Scavenge</h1>
                        <p className="subtitle">Find recipes based on ingredients you already own!</p>
					</div>
				</div>
			</section>
            <section className="section">
				<div className="box">
					<SearchBar onSubmit={onSearchSubmit}  placeholder="Type in your ingredients, separated by commas."/>
				</div>

				{recipes.map(recipe => (
					<>
						<div className="tile is-ancestor box" key={recipe.id}>
							<div className="tile">
								<div className="content">
									<figure className="image">
										<img
											className="gridImage"
											src={recipe.image}
										/>
									</figure>
								</div>
							</div>
							<div className="tile">
								<div className="content">
									<Link href="/p/[id]" as={`/p/${recipe.id}`}>
										<a className="gridLink">
											{recipe.title}
										</a>
									</Link>
								</div>
							</div>
						</div>
					</>
				))}
			</section>
		</>
	);
};

export default Scavenge;
