import Axios from "axios";
import NavBar from "../../components/NavBar";
import React from "react";
import "../../styles/styles.sass";
import uuid from "uuid/v4";

const RecipeDirections = props => {
	return (
		<>
			<NavBar />
			<section className="hero is-info">
				<div className="hero-body">
					<div className="container has-text-centered">
						<div className="content">
							<p className="title">Time to get cookin'!</p>
						</div>
					</div>
				</div>
			</section>
			<section className="box container">
				<h1>Recipe Name:</h1>
				<br />
				<div className="table-container">
					<table className="table is-bordered is-hoverable is-narrow">
						<tbody>
							<tr>
								<td className="is-selected">
									<strong>Ingredients</strong>
								</td>
								{props.ingredients.ingredients.map(
									ingredient => (
										<td key={uuid()}>{ingredient.name}</td>
									)
								)}
							</tr>
						</tbody>
					</table>
				</div>
				<br />
				<ol className="list is-hoverable">
					<li className="list-item is-active">Instructions</li>
					{props.steps.map(step => (
						<li key={uuid()} className="list-item">
							{step.step}
						</li>
					))}
				</ol>
			</section>
			<style jsx>{`
				.table {
					margin-left: auto;
					margin-right: auto;
				}
			`}</style>
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

	const response = await Axios.get(
		`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=cbdb4c6c328541689e7db2d210a6b528`
	);

	const ingredients = response.data;

	return { steps, ingredients };
};

export default RecipeDirections;
