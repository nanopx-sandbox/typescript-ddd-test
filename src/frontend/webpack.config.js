const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./src/frontend/index.ts",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },

  target: "web"
};
