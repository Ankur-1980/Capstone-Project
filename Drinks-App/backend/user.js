const knex = require("./connection");

module.exports = {
  // get the first instance of
  getOne: (id) => {
    return knex("users").where("user_id", id).first();
  },
  getOnebyEmail,
};
