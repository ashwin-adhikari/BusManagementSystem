const {
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
  login,
} = require("./user.controller");

const { verifyToken } = require("../../auth/token_validation");
const router = require("express").Router();

router.post("/", verifyToken, createUser);
router.get("/", verifyToken, getUser);
router.get("/:id", verifyToken, getUserById);
router.patch("/", verifyToken, updateUser);
router.delete("/", verifyToken, deleteUser);
router.post("/login", login);
module.exports = router;
