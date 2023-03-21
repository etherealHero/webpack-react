const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    clean: true,
  },
  devServer: {
    port: 3000,
    static: {
      directory: "./src",
      watch: true,
    },
  },
  plugins: [
    new HTMLWebpackPlugin({ template: "./src/index.html" }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env", {}]],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
}
