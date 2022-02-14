const express = require("express");
const router = express.Router();
const {
  loginUser,
  signUpUser,
  logOutUser,
  getSingleUser,
} = require("../../controllers/auth");

// @route  POST api/auth/:user
// access  Public
router.post("/login", loginUser);

// @route  POST api/auth/singup
// access  Public
router.post("/signup", signUpUser);

// @route  GET api/auth/logout
// access  Public
router.get("/logout", logOutUser);

// @route  POST api/auth/logout
// access  Public
router.post("/user", getSingleUser);

module.exports = router;
