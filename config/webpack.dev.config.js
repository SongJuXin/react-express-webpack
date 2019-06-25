const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.config');
const path = require('path');

const webpackConfig = merge(baseWebpackConfig, {
    //environment specific config goes here
    mode: 'development',
    entry: {
        index:['webpack-hot-middleware/client?noInfo=true&reload=true','./client/src/index.js']
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[name]---[local]---[hash:base64:5]'
                        }
                    }
                ],
                include: [path.resolve(__dirname, '../client/src')],

            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',

                    },
                ],
                include: [path.resolve(__dirname, '../node_modules')],

            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]

});



module.exports = webpackConfig;

