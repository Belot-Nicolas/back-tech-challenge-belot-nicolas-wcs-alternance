const connection = require("../db-config");
const db = connection.promise();

const findMany = () => {
  return db.query("SELECT * FROM characters").then(([results]) => results);
};

const create = ({ name }) => {
  return db
    .query("INSERT INTO characters (name) VALUES (?)", [name])
    .then(([result]) => {
      const id = result.insertId;
      return { id, name };
    });
};

module.exports = {
  findMany,
  create,
};
