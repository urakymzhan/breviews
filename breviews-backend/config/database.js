const mongoose = require("mongoose");
// keys for production are setup in heroku dashboard // you can utitlize default.json and production.json if you don't want to use heroku dashboard
const db = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@users-rsup3.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;
// console.log("DB URL: ", db);

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected and Running...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
