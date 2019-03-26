
/*module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  devtool: "sourcemap"
}; */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  //entry: "../ThingsToDoFront/src/index.jsx",
  //entry: path.resolve(__dirname) + '/ThingsToDoFront/src/index.jsx',
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!html-loader!ThingsToDoFront/templates/index.html'
    })
  ],
  devtool: 'sourcemap',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  }
};