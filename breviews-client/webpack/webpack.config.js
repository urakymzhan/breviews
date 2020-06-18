const path = require("path");

const jsLoader = {
  test: /\.jsx?$/,
  // ignore transpiling JavaScript from node_modules 
  exclude: /node_modules/,
  // use the babel-loader for transpiling JavaScript to a suitable format
  loader: "babel-loader",
  options: {
    // attach the presets to the loader (most projects use .babelrc file instead)
    presets: ["@babel/preset-env", "@babel/preset-react"],
    // order of plugins are important
    plugins: [
      // this allows us to use async await syntax
      "@babel/plugin-transform-runtime",
      // for spinner animation
      "emotion"
    ]
  }
};
const htmlLoader = {
  test: /\.html$/i,
  loader: 'html-loader',
};
const urlLoader = {
  test: /\.(ttf|woff)/,
  use: [
    {
      loader: 'url-loader'
    }
  ]
};
const fileLoader = {
  test: /\.(png|jpeg|jpg|gif|ico|svg|eot|otf)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: "[name].[hash].[ext]",
        // TODO
        outputPath: "assets/",
      }
    },
  ],
};

module.exports = {
  // we can have more than 1 entry point ex: entry: {main: path.resolve(__dirname, "index.js"), vendor: "./src/vendor.js" }
  // then in dev and prod replace bundle to [name].js or whatever 
  // this might be useful in using 3rd party libraries like bootstrap js, jquery etc.
  entry: path.resolve(__dirname, "..", "index.js"),

  module: {
    rules: [jsLoader, htmlLoader, urlLoader, fileLoader ]
  },
};
