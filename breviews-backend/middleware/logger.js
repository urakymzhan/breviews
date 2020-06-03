// Log what is unknow to your code, e.g. "network calls" and "database calls"
// Do not log what external interactions do: but log what put in and then what comes back.
// Timestamps are very impertontat if app gets large.

const logger = (req, res, next) => {
  console.log(
    ` hitting URL: ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
};
module.exports = logger;
