const {
  create,
  createLogin,
  signIn,
  getUser,
  getLogin,
  getUserById,
  updateUser,
  deleteUser,
  getUserByEmail,
} = require("./user.service");

const pool = require("../../config/connectSql");
const path = require("path");

const { sign } = require("jsonwebtoken");
const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Database connection error",
        });
      }

      return res.status(200).json({
        success: true,
        data: results,
      });
    });
  },
  createLogin: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

    createLogin(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Database connection error",
        });
      }

      return res.status(200).json({
        success: true,
        data: results,
      });
    });
  },

  signIn: (req, res) => {
    const { username, password } = req.body;
    pool.query(
      `select * from login where username=?`,
      [username],
      async (err, results, fields) => {
        if (err) return res.status(500).send("Database error");

        if (results.length === 0) {
          return res.status(401).send("User not found");
        }

        const user = results[0];
        const pwdMatch = await compare(password, user.password);

        if (pwdMatch) {
          res.status(200).json({
            success: true,
          });
          // res.sendFile(path.join(__dirname, "..", "..", "Site", "index.html"));
        } else {
          res.status(401).send("Invalid password");
        }
      }
    );
  },
  getLogin: (req, res) => {
    getLogin((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        data: results,
      });
    });
  },
  getUser: (req, res) => {
    getUser((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: true,
        data: results,
      });
    });
  },

  getUserById: (req, res) => {
    const id = req.params.id;

    getUserById(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Database connection error",
        });
      }

      if (!results) {
        return res.status(200).json({
          message: "Record not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: results,
      });
    });
  },
  updateUser: (req, res) => {
    const body = req.body;
    body.password = hashSync(body.password, genSaltSync(10));

    updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: true,
        data: results,
      });
    });
  },

  deleteUser: (req, res) => {
    const id = req.body;
    deleteUser(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: true,
        data: results,
      });
    });
  },

  login: (req, res) => {
    const body = req.body;

    getUserByEmail(body.email, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Database connection error",
        });
      }

      if (!results) {
        return res.json({
          data: "Invalid email and password",
        });
      }

      const result = compareSync(body.password, results.password);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, "qwe1234", {
          expiresIn: "1h",
        });

        return res.json({
          success: true,
          message: "login successful",
          token: jsontoken,
        });
      } else {
        return res.status(200).json({
          data: "Invalid email and password",
        });
      }
    });
  },
};
