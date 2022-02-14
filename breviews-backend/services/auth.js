// NOTE:  Keep Business logic layer here (as well as db access)
const mongoose = require("mongoose");
const User = require("../models/Users");

const findSingleUserByEmail = async (email) => {
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

const findSingleUserById = async (id) => {
  // cast error: string to objectid
  let sid = mongoose.Types.ObjectId(id);
  try {
    return await User.findById(sid);
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { findSingleUserByEmail, findAndPostUser, findSingleUserById };
