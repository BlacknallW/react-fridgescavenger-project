export const ENV = process.env.NODE_ENV || "development";
/* API Urls */
export const baseUrl =
	ENV === "production"
		? `https://api.spoonacular.com/recipes/complexSearch?apiKey=cbdb4c6c328541689e7db2d210a6b528&query=cheese&number=10&instructionsRequired=true`
		: "./recipelist.json";
