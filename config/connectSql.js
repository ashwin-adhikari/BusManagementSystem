// const mysql = require("mysql2/promise");
// require("dotenv").config();

// const pool = mysql.createPool({
//   port: process.env.DB_PORT,
//   host: "localhost",
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
//   connectionLimit: 10,
// });

// const query = async (queryString, values) => {
//   try {
//     const connection = await pool.getConnection();
//     const [results, fields] = await connection.query(queryString, values);
//     // console.log(fields);
//     connection.release();
//     return results;
//   } catch (err) {
//     if (err) throw err;
//   }
// };

// // query("select * from account where id=?", [1001]);
// (async () => {
//   try {
//     const results = await query("select * from account");
//     console.log(results);
//   } catch (err) {
//     console.error("Error executing query:", err);
//   } finally {
//     pool.end();
//   }
// })();

// module.exports = query;

const { createPool } = require("mysql2");

const pool = createPool({
  port: process.env.DB_PORT,
  host: "localhost",
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: 10,
});

// const connection = pool.getConnection();

module.exports = pool;
