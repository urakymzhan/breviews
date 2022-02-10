const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

// 3rd parameter is collection name
module.exports = User = mongoose.model("user", UserSchema, "users");
