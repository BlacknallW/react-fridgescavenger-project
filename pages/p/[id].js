import Axios from "axios";
import NavBar from "../../components/NavBar";
import React from "react";
import "../../styles/styles.sass";
import uuid from "uuid/v4";

const RecipeDirections = props => {
	return (
		<>
			<NavBar />
			<section className="hero is-success">
				<div className="hero-body">
					<div className="container has-text-centered">
						<div className="content">
							<p className="title">Time to get cookin'!</p>
						</div>
					</div>
				</div>
			</section>
			<section className="box section">
				<h1 className="title has-text-centered">
					{props.summary.title}
				</h1>
				<div className="tile is-ancestor">
					<div className="tile is-parent">
						<article className="tile is-child">
							<figure className="image">
								<img
									src={props.summary.image}
									alt={props.summary.title}
									style={{
										borderRadius: 10,
										marginLeft: "auto",
										marginRight: "auto",
										display: "block"
									}}
								/>
							</figure>
						</article>
					</div>
					<div class="tile is-parent is-vertical">
						<article class="tile is-child notification ">
							<div class="content">
								<h1 className="subtitle has-text-centered">
									Ingredients
								</h1>
								<div className="table-container">
									<table className="table is-bordered is-hoverable is-narrow">
										<tbody>
											<tr>
												{props.ingredients.ingredients.map(
													ingredient => (
														<td key={uuid()}>
															{ingredient.name.toUpperCase()}
														</td>
													)
												)}
											</tr>
										</tbody>
									</table>
								</div>
								<div class="content"></div>
							</div>
						</article>
						<article class="tile is-child notification">
							<div class="content">
								<h1 className="subtitle has-text-centered">
									Instructions
								</h1>
								<ol className="list is-hoverable">
									{props.steps.map(step => (
										<li key={uuid()} className="list-item">
											{step.step}
										</li>
									))}
								</ol>
								<div class="content"></div>
							</div>
						</article>
					</div>
				</div>
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

	const response = await Axios.get(
		`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=cbdb4c6c328541689e7db2d210a6b528`
	);

	const ingredients = response.data;

	const respond = await Axios.get(
		`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&&apiKey=cbdb4c6c328541689e7db2d210a6b528`
	);

	const summary = respond.data;

	return { steps, ingredients, summary };
};

export default RecipeDirections;
