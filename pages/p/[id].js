import Axios from "axios";
import NavBar from "../../components/NavBar";
import React from "react";
import "../../styles/styles.sass";

const RecipeDirections = (props, context) => {
	return (
		<>
			<NavBar />
			<section className="box container">
				<h1>Recipe Name:</h1>
				<p>Ingredients:</p>
				<ol className="list is-hoverable">
					{props.steps.map(step => (
						<li className="list-item">{step.step}</li>
					))}
				</ol>
			</section>
		</>
	);
};

RecipeDirections.getInitialProps = async context => {
	const { id } = context.query;
	const res = await Axios.get(
		`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=cbdb4c6c328541689e7db2d210a6b528`
	);
	const recipe = res.data;

	const recipeArray = Object.values(recipe);

	const steps = recipeArray[0].steps;

	

	return { steps, recipe };
};

export default RecipeDirections;
