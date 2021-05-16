const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./docs"),
    filename: "index_bundle.js",
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  devServer: {
    contentBase: path.join(__dirname, "docs"),
    open: true,
    port: 3000,
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: "file-loader?name=fonts/[name].[ext]!static",
      },
    ],
  },
};
