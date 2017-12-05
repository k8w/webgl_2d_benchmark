const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        symlinks: false
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader' }
        ]
    }
}