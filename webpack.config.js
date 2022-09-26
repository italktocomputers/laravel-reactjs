const webpack = require('webpack');
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    entry: path.resolve(__dirname, './resources/js/app.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {targets: 'defaults'}]],
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
    },
    plugins: [
        new StyleLintPlugin({extensions: ['scss'], failOnError: true}),
        new webpack.HotModuleReplacementPlugin(),
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
            failOnError: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Laravel and ReactJS',
            filename: './index.html',
            alwaysWriteToDisk: true,
        }),
        new HtmlWebpackHarddiskPlugin(),
    ],
};
