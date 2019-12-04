import Axios from "axios";
import React, { useState } from "react";

const RecipeDirections = props => {
	return (
		<>
			<ol>
				{props.steps.map(direction => (
					<li>{direction}</li>
				))}
			</ol>
		</>
	);
};

RecipeDirections.getInitialProps = async context => {
	const { id } = context.query;
	const res = await Axios.get(
		`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=cbdb4c6c328541689e7db2d210a6b528`
	);
	const recipe = res.data;

	const directions = recipe[0]["steps"];

	console.log(directions)

	return null;
};

export default RecipeDirections;
