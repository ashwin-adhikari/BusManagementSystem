const {
  create,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("./user.service");

const { genSaltSync, hashSync } = require("bcrypt");

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
};
