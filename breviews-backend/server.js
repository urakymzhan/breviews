const express = require("express");
const logger = require("./middleware/logger");
const connectDB = require('./config/database');
const bootcamps = require("./routes/api/bootcamps");
const HttpError = require('./models/http-errors');
const path = require('path');

// init
const app = express();

// db
connectDB();

// middlewares
app.use(express.json({ extended: true })); // bodyparser
app.use(express.urlencoded({ extended: true })); // handle form submissions/url encoded data
app.use(logger);
// middleware to handle CORS issue
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
})

// routes
// app.get("/", (req, res, next) => res.send("API Running")); // get rid of this in production
app.use("/api", bootcamps);
// handle Could not GET errors... (optional feature)
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route', 404);
    throw error;
})
// this middleware executes only if any route encouters an error
// Very important!!!
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500)
    res.json({ message: error.message || 'An unknown error occured!' });
})


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../breviews-client/dist/index.html'));
  });

// port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;



// // Serve static assets in production if served both front and backend combined
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }



