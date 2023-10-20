const database = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "boilerplate",
    timezone: "+00.00",
  },
});

export default database;
