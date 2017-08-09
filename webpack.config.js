
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: [
         'babel-polyfill',
         './src/client/startup.js',
    ],

    output: {
        filename: '[name].js',
        path: path.join(__dirname, "dist"),
    },

    plugins: [new HtmlWebpackPlugin({
        title: 'Manager',
        filename: 'index.html',
//        hash: true,
        template: './src/index.jst'
        })],

    resolve: {
        extensions: ['.js', '.ls']
    },

    module: {
        exprContextCritical: false,
        loaders: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                exclude: /(node_modules|bower_components)/,
                test : /\.js$/,
                loader : "babel-loader",
                query : {
//                    presets: ['react', 'stage-0', 'es2015'],
                    presets: ['react', 'stage-0'],
                    plugins: ['transform-decorators-legacy', 'transform-class-properties']
                }
            },
            {
                test : /\.html$/,
                loader : "html-loader"
            },
            {
                test : /\.ls$/,
                loader : "livescript-loader"
            },
            {
                test : /\.styl$/,
                loader : "style-loader!css-loader!stylus-loader"
            },
            {
                test : /\.css$/,
                loader: 'style-loader'
            },
            {
                test : /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    emitWarning: true,
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader', options: {
                            includePaths: ['./node_modules', './node_modules/grommet/node_modules']
                        }
                    }
                ]
            },
        ]
    },

    devtool: "cheap-source-map",

    node: { fs: 'empty' },

    devServer: {
        host : '0.0.0.0',
        port : 8080,
        disableHostCheck : true,
        publicPath: "/",
        contentBase: "./dist",
        overlay: {
            errors:true,
            warnings:true
        },
    }

};
