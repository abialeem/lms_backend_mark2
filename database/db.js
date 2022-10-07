const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "locahost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "taalimulquran",
});

connection.connect((err) => {
  if (err) console.log(err);
  else console.log("MySQL is connected...");
});

module.exports = connection;
