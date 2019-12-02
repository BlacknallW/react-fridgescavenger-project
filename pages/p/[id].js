import fetch from "isomorphic-unfetch";

const RecipeDirections = props => (
	<>
		<h1>{props.stepOne}</h1>
	</>
);

RecipeDirections.getInitialProps = async context => {
	const { id } = context.query;
	// const res = await fetch(
	// 	`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=cbdb4c6c328541689e7db2d210a6b528`
	// );
	// const recipe = await res.json();

	// const stepOne = recipe[0]["steps"][0]["step"];

	// return {stepOne};
};

export default RecipeDirections;
