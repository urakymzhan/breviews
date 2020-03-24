const monk = require("monk");
const config = require("config");
const dbURI = config.get("mongoURI");

const db = monk(dbURI);

db.then(() => {
  console.log("Database correctly to connected to server");
});

module.exports = db;

// NOTE: I want to switch to mongoose ideally
