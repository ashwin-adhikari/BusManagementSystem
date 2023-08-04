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
  createLogin: (data, callBack) => {
    pool.query(
      `insert into login values(?,?)`,
      [data.username, data.password],
      (err, results, fields) => {
        if (err) return callBack(err);
        return callBack(null, results);
      }
    );
  },

  getLogin: (callBack) => {
    pool.query(`select * from login`, [], (err, results, fields) => {
      if (err) return callBack(err);
      return callBack(null, results);
    });
  },

  getUser: (callBack) => {
    pool.query(`select * from registration`, [], (err, results, fields) => {
      if (err) return callBack(err);
      return callBack(null, results);
    });
  },

  getUserById: (data, callBack) => {
    pool.query(
      `select * from registration where id=?`,
      [data],
      (err, results, fields) => {
        if (err) return callBack(err);
        return callBack(null, results[0]);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update registration set firstname=?,lastname=?,gender=?,email=?,password=?,number=? where id=?`,
      [
        data.firstname,
        data.lastname,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.id,
      ],
      (err, results, fields) => {
        if (err) return callBack(err);
        return callBack(null, results);
      }
    );
  },

  deleteUser: (data, callBack) => {
    pool.query(
      `delete from registration where id=?`,
      [data.id],
      (err, results, fields) => {
        if (err) return callBack(err);
        return callBack(null, results[0]);
      }
    );
  },

  getUserByEmail: (email, callBack) => {
    pool.query(
      `select * from registration where email=?`,
      [email],
      (err, results, fields) => {
        if (err) return callBack(err);
        return callBack(null, results[0]);
      }
    );
  },
};
