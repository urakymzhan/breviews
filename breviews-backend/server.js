const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cors = require("cors");
const logger = require("./middleware/logger");
const db = require("./config/database");

// app
const app = express();

// middlewares
app.use(express.json({ extended: false })); // bodyparser
app.use(express.urlencoded({ extended: false })); // handle form submissions/url encoded data
app.use(logger); // logger
app.use(cors()); // enalbe all CORS resquests

// make our db accessible to our router
app.use(function(req, res, next) {
  req.db = db;
  next();
});

app.get("/", (req, res) => res.send("API Running"));

// define Routes
app.use("/api", require("./routes/api/bootcamps"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;

// // Serve static assets in production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
