const path = require("path")
const WorkboxPlugin = require('workbox-webpack-plugin');
const common = require("./webpack.config")
const merge = require("webpack-merge")


module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: 'var',
        library: 'Client',
    }
  });

