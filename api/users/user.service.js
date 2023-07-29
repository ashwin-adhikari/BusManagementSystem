const pool = require("../../config/connectSql");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into registration(firstname,lastname,gender,email,password,number) values(?,?,?,?,?,?)`,
      [
        data.firstname,
        data.lastname,
        data.gender,
        data.email,
        data.password,
        data.number,
      ],
      (err, results, fields) => {
        if (err) return callBack(err);
        return callBack(null, results);
      }
    );
  },
};
