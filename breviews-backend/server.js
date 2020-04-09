const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");
const connectDB = require('./config/database');

// app
const app = express();

// Connect Database
connectDB();

// middlewares
app.use(express.json({ extended: false })); // bodyparser
app.use(express.urlencoded({ extended: false })); // handle form submissions/url encoded data
app.use(logger); // logger
app.use(cors()); // enalbe all CORS resquests


// define Routes
app.get("/api", (req, res) => res.send("API Running"));
app.use("/api", require("./routes/api/bootcamps"));

// port
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