

var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./webpack.config.js');

config.plugins = [new HtmlWebpackPlugin({
        title: 'Manager',
        filename: 'index.html',
        hash: true,
        template: './src/index.jst'
    })],

config.module.loaders[1].query.presets = ['react', 'stage-0', 'es2015'];

module.exports = config;
