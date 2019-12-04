import React, {useState, useEffect} from "react";
import Head from "next/head";
import Nav from "../components/nav";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import SearchBar from "../components/SearchBar"
import Axios from "axios"
// import { baseUrl } from "../config";



const Home = props => (
	<div>
		<Head>
			<title>Home</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Nav />
		<h1>Recipe List</h1>
		<SearchBar onSubmit={OnSearchSubmit()}/>
		<ol>
			{/* {props.recipes.map(recipe => (
				<li key={recipe.id}>
					<Link href="/p/[id]" as={`/p/${recipe.id}`}>
						<a>{recipe.title}</a>
					</Link>
				</li>
			))} */}
		</ol>
	</div>
);

const OnSearchSubmit = async (query) => {
	const res = await Axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=cbdb4c6c328541689e7db2d210a6b528&query=${query}&number=10&instructionsRequired=true`);

	console.log(res.data)

	return res.data
}

// Home.getInitialProps = async (query) => {
// 	const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=cbdb4c6c328541689e7db2d210a6b528&query=${query}&number=10&instructionsRequired=true`);
// 	const data = await res.json();

// 	return {
// 		recipes: data.results.map(result => result)
// 	};
// };

export default Home;
