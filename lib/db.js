const pgp = require("pg-promise")({
	query: function(e) {}
});

const options = {
	host: process.env.POSTGRES_HOST,
	database: process.env.POSTGRES_DATABASE,
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD
};

const db = pgp(options);

exports.query = async query => {
	try {
		const results = await db.query(query);
		await db.end();
		return results;
	} catch (error) {
		return { error };
	}
};

