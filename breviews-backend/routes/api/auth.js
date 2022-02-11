const express = require("express");
const router = express.Router();
const { loginUser, signUpUser, logOutUser } = require("../../controllers/auth");

// @route  GET api/auth/:user
// access  Public
router.post("/login", loginUser);

// @route  POST api/auth/singup
// access  Public
router.post("/signup", signUpUser);

// @route  GET api/auth/logout
// access  Public
router.get("/logout", logOutUser);

module.exports = router;
