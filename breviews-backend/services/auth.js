// NOTE:  Keep Business logic layer here (as well as db access)
const User = require("../models/Users");

const findSingleUser = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (err) {
    throw new Error(err.message);
  }
};
const findAndPostUser = async (newUser) => {
  try {
    let createdUser = await new User(newUser);
    await createdUser.save();
    return createdUser;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { findSingleUser, findAndPostUser };
