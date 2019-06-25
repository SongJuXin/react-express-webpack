const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {


    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../static'),
        publicPath: "/"
    },

    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        "presets": [
                            [
                                "@babel/preset-env",
                                {
                                    "modules": false
                                }
                            ],
                            [
                                "@babel/preset-react",
                                {
                                    development: process.env.NODE_ENV === "development",
                                },
                            ],
                        ],
                        "plugins": [
                            "@babel/plugin-syntax-dynamic-import",
                            ["import", {
                                "libraryName": "antd",
                                "libraryDirectory": "es",
                                "style": "css" // `style: true` 会加载 less 文件
                            }]
                        ]
                    },
                },
                include: [path.resolve(__dirname, '../client/src')],
                exclude: [path.resolve(__dirname, '../node_modules')]
            },

            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/src/index.html',
            filename: 'index.html'
        })
    ]

};
