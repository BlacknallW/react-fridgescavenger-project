import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { baseUrl } from "../config";


console.log("base url is", baseUrl);

const Home = props => (
	<div>
		<Head>
			<title>Home</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Nav />
		<h1>Recipe List</h1>
		<ol>
			{props.recipes.map(recipe => (
				<li key={recipe.id}>
					<Link href="/p/[id]" as={`/p/${recipe.id}`}>
						<a>{recipe.title}</a>
					</Link>
				</li>
			))}
		</ol>
	</div>
);

Home.getInitialProps = async () => {
	const res = await fetch(baseUrl);
	const data = await res.json();

	return {
		recipes: data.results.map(result => result)
	};
};

export default Home;
