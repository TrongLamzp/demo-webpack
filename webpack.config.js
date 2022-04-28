const path = require("path");
const { webpack } = require("webpack");
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js", // Dẫn tới file index.js ta đã tạo
  output: {
    path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
    filename: "bundle.js" // Tên file được build ra
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ["babel-loader"]
      },
      {
        test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
         use: ["style-loader", "css-loader"]
        // use: [
        //   MiniCssExtractPlugin.loader,
        //   "css-loader", "postcss-loader",
        // ]
      }
    ]
  },
  // Chứa các plugins sẽ cài đặt trong tương lai
  plugins: [
    // new webpack.ProvidePlugin({
    //   $:'query',
    //   jQuery: 'jquery'
    // }),
    // new MiniCssExtractPlugin({
    //   filename: "styles.css",
    //   chunkFilename: "styles.css"
    // }),
    // new HtmlWebPackPlugin({
    //   template: "./src/index.html",
    //   filename: "./index.html"
    // }),

  ]
};
