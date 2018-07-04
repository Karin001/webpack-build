const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        compress: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('main.css'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),

    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
                //ExtractTextPlugin.extract({
                //     fallback:"style-loader",
                //     use:[{
                //         loader:"css-loader"
                //     },{
                //         loader:"sass-loader"
                //     }]
                // })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};