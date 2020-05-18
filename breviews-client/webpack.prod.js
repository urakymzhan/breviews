const path = require("path");
const common = require('./webpack.config');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    // cache busting
    filename: "bundle.[contentHash].js", 
    path: path.resolve(__dirname, "dist"),
    // TODO: fails if remove dot
    publicPath: '/'
  },
  optimization: {
    // minimizing css and js files
    minimizer: [
      new OptimizeCssAssetsPlugin(), 
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        },
        favicon: './public/sample.ico'
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'bundle.[contentHash].css'}), 
    // cleaning up dist folder to use only one bundle on each build
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // 2. Extract css into files
            options: {
              esModule: true,
            },
          },
          'css-loader',                           // 1. Turns css into commonjs
        ],
      },
    ]
  }
});
