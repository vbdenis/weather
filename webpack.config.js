const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  mode: "development",
  devtool: 'inline-source-map',
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.js",
    clean: true,
  },
  devServer: {
    open: true,
    hot: true,
  },
  //fix .jsx file import
  resolve: { 
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2)$/,
        use: ["file-loader"]
      },
      // {
      //   test: /\.svg$/,
      //   use: [
      //     'svg-sprite-loader',
      //     'svgo-loader'
      //   ]
      // },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new SpriteLoaderPlugin(),
  ],
  //fix hot reload with .browserslistrc https://github.com/webpack/webpack-dev-server/issues/2758
  target: "web",
};
