
const router = require("express").Router();
const verify = require("../middleware/Token");

// Import route logic functions from route controller
const { getUsers, getSpecificUser } = require("../controller/admin");

// Set routes to get all users or find specific user
router.route("/").get(getUsers).post(getSpecificUser);

module.exports = router;