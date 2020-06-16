const path = require("path");
const common = require('./webpack.config');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv');
const env = dotenv.config().parsed;
const webpack = require('webpack');

const plugins = [
  new MiniCssExtractPlugin({ filename: 'bundle.[contentHash].css' }),
  // cleaning up dist folder on each build
  new CleanWebpackPlugin(),
  new webpack.DefinePlugin({ 
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
      API_URL: JSON.stringify(`${env.API_PROD_URL}`)
    }
  })
];

const cssLoader = {
  test: /\.css$/i,
  use: [
    {
      loader: MiniCssExtractPlugin.loader, 
      options: {
        esModule: true,
      },
    },
    'css-loader',                           
  ],
};
const sassLoader = {
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader",
    "sass-loader"
  ]
};

module.exports = merge(common, {
  mode: "production",
  devtool: 'source-map',
  output: {
    // cache busting
    filename: "bundle.[contentHash].js",
    path: path.resolve(__dirname, "..", "dist"),
    publicPath: '/'
  },
  optimization: {
    // minimizing css, js 
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "..", "public", "index.html"),
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        },
        favicon: './public/sample.ico'
      })
    ]
  },
  module: {
    rules: [cssLoader, sassLoader]
  },
  plugins
});
