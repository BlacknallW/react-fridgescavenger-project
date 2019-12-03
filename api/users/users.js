const db = require("../../lib/db");
const escape = require("sql-template-strings");

module.exports = async (req, res) => {
	const [users] = await db.query(escape`
    SELECT *
    FROM user_info
    WHERE id = ${req.query.id}
  `);
	res.status(200).json({ users });
};
