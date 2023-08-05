const {
  // createUser,
  // createLogin,
  // signIn,
  // getLogin,
  // getUser,

  // getUserById,
  // updateUser,
  // deleteUser,
  // login,
  assignCities,
  assignRoutes,
  assignRouteStages,
  assignCitiesInStages,

  registerEmployee,
  registerBus,
  signIn,
  assignBuses,
} = require("./user.controller");

const { verifyToken } = require("../../auth/token_validation");
const router = require("express").Router();

// router.post("/", verifyToken, createUser);
// router.get("/", verifyToken, getUser);
// router.get("/:id", verifyToken, getUserById);
// router.patch("/", verifyToken, updateUser);
// router.delete("/", verifyToken, deleteUser);
// router.post("/login", login);
// router.post("/createLogin", createLogin);
// router.get("/createLogin", getLogin);
router.post("/cities", assignCities);
router.post("/routes", assignRoutes);
router.post("/stages", assignRouteStages);
router.post("/citiesinstages", assignCitiesInStages);
router.post("/signin", signIn);
router.post("/registerEmployee", registerEmployee);
router.post("/registerBus", registerBus);
router.post("/assignBus", assignBuses);
module.exports = router;
