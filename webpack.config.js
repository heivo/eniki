var path = require('path');
// var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main/js/app.js',
    devtool: 'sourcemaps',
    output: {
        path: path.join(__dirname, 'src/main/resources/static'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: ["transform-decorators-legacy"]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Eniki'
        })
    ],
    devServer: {
        inline: true,
        hot: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8081',
                secure: true
            }
        },
        // historyApiFallback: true
    }
};