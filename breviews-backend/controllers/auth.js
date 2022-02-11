// NOTE:  Make sure Express logic (req, res etc..) ends in here and not pass to Services
const { findSingleUser, findAndPostUser } = require("../services/auth");
const jwt = require("jsonwebtoken");
const HttpError = require("../models/http-errors");
const User = require("../models/Users");

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await findSingleUser(email);
    console.log("user", user);
    if (!user) {
      return next(
        new HttpError("Wrong Username or Password! Please try again!", 404)
      );
    }
    // Check the password
    user.comparePassword(password, (err, isMatch) => {
      if (!isMatch) {
        // Password does not match
        return res
          .status(401)
          .send({ message: "Wrong Username or password! Please try again!" });
      }
      // Create a token
      const token = jwt.sign(
        { _id: user._id, username: user.username },
        process.env.SECRET_KEY,
        {
          expiresIn: "60 days",
        }
      );
      // Set a cookie and redirect to root
      res.cookie("userToken", token, { maxAge: 900000, httpOnly: true });
      //   return res.redirect("/");
      return res.json({ user: user, message: "User successfully signed in!" });
    });
  } catch (err) {
    console.error(err.message);
    return next(new HttpError("Server Error", 500));
  }
};
const signUpUser = async (req, res, next) => {
  // express validator maybe ?
  try {
    const { email } = req.body;

    // check if user exists with the same email
    const isExists = await findSingleUser(email);
    if (isExists) {
      return next(new HttpError("User already exists with this email!", 202));
    }

    const createdUser = await findAndPostUser(req.body);

    const token = jwt.sign({ _id: createdUser._id }, process.env.SECRET_KEY, {
      expiresIn: "60 days",
    });
    res.cookie("userToken", token, { maxAge: 900000, httpOnly: true });

    if (!createdUser) {
      return next(
        new HttpError("Could not create a new user. Please try later", 404)
      );
    }
    res.json(createdUser);
  } catch (err) {
    console.error(err.message);
    return next(new HttpError("Server Error", 500));
  }
};

const logOutUser = async (req, res, next) => {
  try {
    res.clearCookie("userToken");
    res.json({ message: "User successfully logged out!" });
    res.end(); // without this cookie is not getting cleared on browser
  } catch (err) {
    console.log(err.message);
    return next(new HttpError("Server Error", 500));
  }
};

module.exports = { loginUser, signUpUser, logOutUser };
