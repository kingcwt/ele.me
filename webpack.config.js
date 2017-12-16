let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',//入口文件
    output: {//输出配置项
        path: path.resolve('build'),//输出的目录
        filename: 'bundle.js'//输出的文件名
    },
    //可以配置一个源代码到打包后代码的一个映射，可以在控制看到源代码报错的行数而非bundle.js里的行里
    devtool: 'cheap-module-source-map',
    devServer: {
        proxy:{
            "/api":"http://localhost:3000"
        }
    },
    //配置模块
    module: {
        //模块加载规则
        rules: [
            {
                test: /\.js$/,//如果说要加载的文件后缀是.js的话
                loader: 'babel-loader',//指定加载器
                query: {
                    presets: ["es2015", "stage-0", "react"]
                },
                exclude: /node_modules///排除的模块
            },
            {
                test:/\.less$/,
                loaders:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'index.html'
        })
    ]
}