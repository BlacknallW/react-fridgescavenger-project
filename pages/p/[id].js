import Axios from "axios";
import React from "react";
import uuid from "uuid/v4";
import cookies from "next-cookies";

import Layout from "../../components/Layout";
import Footer from "../../components/Footer";

const RecipeDirections = props => {
	const addRecipe = async e => {
		e.preventDefault();
		await Axios.post(`http://localhost:5252/recipes/add`, {
			account: props.account,
			token: props.token,
			recipename: props.summary.title,
			recipeid: props.summary.id,
			recipeimage: props.summary.image
		});
		console.log(props.account, props.token, props.recipe_name, props.recipe_id, props.recipe_image);
		alert("Your recipe has successfully been saved!");
	};

	return (
		<>
			<Layout>
				<section className="hero is-success">
					<div className="hero-body">
						<div className="container has-text-centered">
							<div className="content">
								<p className="title">{props.account}</p>
							</div>
						</div>
					</div>
				</section>
				<section className="box section">
					<h1 className="title has-text-centered">
						{props.summary.title.toUpperCase()}
					</h1>
					<div className="tile is-ancestor">
						<div className="tile is-parent is-flex-touch">
							<article className="tile is-child">
								<figure className="image ">
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
						<div className="tile is-parent is-vertical is-flex-touch">
							<article className="tile is-child notification ">
								<div className="content">
									<h1 className="subtitle has-text-centered">
										Ingredients
									</h1>
									<div className="table-container">
										<table className="table is-bordered is-hoverable is-narrow ">
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
									<div className="content"></div>
								</div>
							</article>
							<article className="tile is-child notification">
								<div className="content">
									<h1 className="subtitle has-text-centered">
										Instructions
									</h1>
									<ol className="list is-hoverable">
										{props.steps.map(step => (
											<li
												key={uuid()}
												className="list-item"
											>
												{step.step}
											</li>
										))}
									</ol>
								</div>
							</article>
						</div>
					</div>
					<button
						className="button is-success"
						type="submit"
						onClick={addRecipe}
						style={{
							display: "block",
							marginLeft: "auto",
							marginRight: "auto"
						}}
					>
						Save Recipe
					</button>
				</section>
				<Footer />
			</Layout>
		</>
	);
};

RecipeDirections.getInitialProps = async context => {
	const { id } = context.query;
	const res = await Axios.get(
		`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=aeeadf9c72f14c55befd99ff1e40a70d`
	);
	const recipe = res.data;

	const recipeArray = Object.values(recipe);

	const steps = recipeArray[0].steps;

	const response = await Axios.get(
		`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=aeeadf9c72f14c55befd99ff1e40a70d`
	);

	const ingredients = response.data;

	const respond = await Axios.get(
		`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&&apiKey=aeeadf9c72f14c55befd99ff1e40a70d`
	);

	const summary = respond.data;

	return {
		steps,
		ingredients,
		summary,
		account: cookies(context).account || "",
		token: cookies(context).token || ""
	};
};

export default RecipeDirections;
