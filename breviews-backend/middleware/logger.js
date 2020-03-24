const logger = (req, res, next) => {
  console.log(
    ` hitting URL: ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
};
module.exports = logger;
