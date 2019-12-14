const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");

const sequelize = require("../lib/db.js/index.js.js");

class User extends Sequelize.Model {}

User.init(
    {

    }
)