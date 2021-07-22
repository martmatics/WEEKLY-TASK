
const router = require("express").Router();

// Import route logic functions from route controller
const { signUp, signIn, logOut } = require("../controller/User");

// Set routes
router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/logout", logOut)

module.exports = router;
