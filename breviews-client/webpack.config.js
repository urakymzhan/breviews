const path = require("path");

module.exports = {
  // app entry point
  // we can more than 1 entry point ex: entry: {main: path.resolve(__dirname, "index.js"), vendor: "./src/vendor.js" }
  // then in dev and prod replace bundle to [name].js or whatever 
  // this might be useful in using 3rd party libraries like bootstrap js, jquery etc.
  entry: path.resolve(__dirname, "index.js"),

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // ignore transpiling JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the babel-loader for transpiling JavaScript to a suitable format
        loader: "babel-loader",
        options: {
          // attach the presets to the loader (most projects use .babelrc file instead)
          presets: ["@babel/preset-env", "@babel/preset-react"],

          // order of plugins are important
          plugins: [
            // this is fixing my polyfill issue, which allows us to use async await syntax
            "@babel/plugin-transform-runtime",
            // emotion is for spinner animation
            "emotion"
          ]
        }
      },
      // moved it to other dev and prod
      // {
      //   test: /\.css$/i,
      //   // css-loader converts to css to js, style-loader injects styles to DOM
      //   use: ["style-loader", "css-loader"]
      // },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[hash].[ext]",
              // TODO
              outputPath: "assets",
            }
          },
        ],
      },
      // {
      //   test: /\.(ico)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //       },
      //     },
      //   ],
      // },
    ]
  },
  devServer: {
    // helps on reloading pages
    historyApiFallback: true,
    port: 8080,
    // proxying backend api
    proxy: { "/api": "http://localhost:5000" },
    // contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    // publicPath: '/assets/'
  },
};
