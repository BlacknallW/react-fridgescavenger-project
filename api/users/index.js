const db = require("../../lib/db");
const escape = require("sql-template-strings");

module.exports = async (req, res) => {
	let page = parseInt(req.query.page) || 1;
	const limit = parseInt(req.query.limit) || 9;
	if (page < 1) page = 1;
	const users = await db.query(escape`
      SELECT *
      FROM user_info
      ORDER BY id
      LIMIT ${(page - 1) * limit}, ${limit}
    `);
	const count = await db.query(escape`
      SELECT COUNT(*)
      AS profilesCount
      FROM user_info
    `);
	const { profilesCount } = count[0];
	const pageCount = Math.ceil(profilesCount / limit);
	res.status(200).json({ users, pageCount, page });
};
