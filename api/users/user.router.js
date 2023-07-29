const {
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("./user.controller");
const router = require("express").Router();

router.post("/", createUser);
router.get("/", getUser);
router.get("/:id", getUserById);
router.patch("/", updateUser);
router.delete("/", deleteUser);
module.exports = router;
