const path = require("path");
const common = require('./webpack.config');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv');
const env = dotenv.config().parsed;
const webpack = require('webpack');

// I could use 1 plugins, 1 cssLoader and 1 sassLoader in common config file 
// but decided not to minimize and cleanup in development because of time and speed.
const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "..", "public", "index.html"),
    favicon: './public/sample.ico'
  }),
  new webpack.DefinePlugin({ 
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      API_URL: JSON.stringify(`${env.API_DEV_URL}`)
    }
  })
];

const cssLoader = {
  test: /\.css$/i,
  use: ["style-loader", "css-loader"]
};

const sassLoader = {
  test: /\.s[ac]ss$/i,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        // prefer `dart-sass`
        implementation: require('sass'),
        sassOptions: {
          fiber: false,
        },
      },
    },
  ],
};

module.exports = merge(common, {
  mode: "development",
  devtool: 'eval-source-map',
  output: {
    filename: "bundle.js", 
    path: path.resolve(__dirname, "..", "dist"),
    publicPath: '/'
  },
  module: {
    rules: [ cssLoader, sassLoader ]
  },
  plugins,

  devServer: {
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 8080,
    contentBase: path.join(__dirname, '../public'),
    publicPath: '/'
    // or publicPath: http://localhost:8080/ -> same as "/"
    // proxy: { "/api": "https://ba-backend.herokuapp.com" },
  },
});
