const path = require("path");
const common = require('./webpack.config');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv');
const env = dotenv.config().parsed;
const webpack = require('webpack');


module.exports = merge(common, {
  mode: "development",
  devtool: 'eval-source-map',
  output: {
    filename: "bundle.js", 
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  // add a custom index.html as the template
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: './public/sample.ico'
    }),
    // env variables
    new webpack.DefinePlugin({ 
      'process.env.API_URL': JSON.stringify(`${env.API_URL}`)
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
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
      },
    ]
  },
  devServer: {
    // helps on reloading pages
    historyApiFallback: true,
    port: 8080,
    // proxying backend api
    proxy: { "/api": "https://ba-backend.herokuapp.com" },
    // contentBase: path.join(__dirname, 'dist'),
    compress: true,
    // publicPath: '/assets/'
  },
});
