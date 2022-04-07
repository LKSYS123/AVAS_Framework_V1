const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const path = require('path');
const { webpack } = require('webpack');
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import path from 'path';
// const { InjectManifest } = require('workbox-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname,
    // entry: './src/index.js',
    // mode: "development",
    entry: {
        app: ['./src/index.js',]
    },
    resolve: {
        modules: [resolve(process.cwd(), 'src'), 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json']
    },

    devServer: {
        historyApiFallback: true,
        port: 3000,
        // liveReload: true,
    },
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM',
    // },
    module: {
        rules: [
            {
                // test: /\.jsx?/,
                test: /\.(js|jsx)$/,
                // exclude: /node_modules/,
                // loader: 'babel-loader',
                // options: {
                //     // presets: ["@babel/env", "@babel/react"],
                //     presets: [
                //         require.resolve('babel-preset-react-app'),
                //     ],
                //     // plugins: ["@babel/plugin-proposal-class-properties", "react-refresh/babel"],

                //     // presets: [
                //     //     [
                //     //         "@babel/preset-env", {
                //     //             modules: 'false',
                //     //             useBuiltIns: 'usage',
                //     //         }
                //     //     ], 
                //     //     "@babel/preset-react"
                //     // ],
                //     // plugins: ["@babel/plugin-proposal-class-properties"],
                // },                
                use: [
                    {
                        loader: 'babel-loader',
                        // options: {
                        //     presets: ["@babel/preset-env", "@babel/preset-react"]
                        // }
                    }
                ],
                // exclude: /node_modules/,
                
            },
            // {
            //     test: /\.html$/,
            //     use: [
            //         {
            //             loader: "html-loader",
            //             options: { minimize:true }
            //         }
            //     ]
            // },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader?name=./images/[name].[ext]',
            },
        ]
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     "React": "react",
        // }),
        new HtmlWebpackPlugin({
            // template: path.resolve(__dirname, 'public/index.html'),
            // filename: 'index.html'
            // template: 'public/index.html',
            inject: true,            
            template: './public/index.html',
            // filename: 'index.html'
        })
    ],

    output: {
        // path: path.join(__dirname, 'dist'),
        // filename: 'app.js',
        // publicPath: '/dist/',
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',

        path: path.join(__dirname, '/dist'),
        filename: "index.bundle.js",        
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: path.resolve(__dirname, 'public/index.html'),
    //         filename: 'index.html',
    //     }),
    //     new CopyPlugin({
    //         patterns: [
    //             { from: "./src/favicon.ico", to: "" },
    //             { from: "./src/manifest.json", to: "" },
    //             { from: "./src/logo192.png", to: "" },
    //             { from: "./src/logo512.png", to: "" },
    //         ]
    //     }),
    //     new InjectManifest({
    //         swSrc: './src/service-worker.js',
    //         swDest: 'sw.js',
    //     })
    // ],
};