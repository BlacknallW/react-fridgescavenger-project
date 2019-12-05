import Axios from "axios";
import Layout from "../../components/MyLayout"
import RecipeCard from "../../components/RecipeCard";

const RecipeDirections = props => {
	return (
		<Layout>
			<RecipeCard recipeName="Pasta Maybe" ingredients="Don't ask">
				<ol>
					{props.steps.map(step => (
						<li>{step.step}</li>
					))}
				</ol>
			</RecipeCard>
		</Layout>
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

	return {steps};
};

export default RecipeDirections;
