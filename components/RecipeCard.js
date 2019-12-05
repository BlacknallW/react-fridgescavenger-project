import React from "react";

const RecipeCard = props => {
	return (
		<>
			<h1>{props.recipeName}</h1>
			<h3>Ingredients: {props.ingredients}</h3>
			{props.children}
		</>
	);
};

export default RecipeCard