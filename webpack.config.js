const { join } = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
module.exports = {
    // mode:'production',
    mode:'development',
    entry:'./src/main.js',
    output:{
        path:join(__dirname,'lib'),
        filename:'webpack-demo.js',
        clean:true
    },
    devServer:{   
        port:30000,
        open : true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:join(__dirname,'/public/index.html')
        }),
        new VueLoaderPlugin(),
        new EslintWebpackPlugin({
            context:join(__dirname,'src/')
        }),
        new MiniCssExtractPlugin()
    ],
    module:{
        rules:[
            // {
            //     test:/\.css/i,
            //     use:["style-loader","css-loader"]
            // },
            {
                test:/\.css/i,
                use:[MiniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test:/\.less/i,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.(png|gif|jpg|jpge)$/i,
                // type:"asset/resource"
                type:'asset',
                // parser:{
                //     dataUrlCondition:{
                //         maxSize: 2*1024
                //     }
                // }
                generator:{
                    filename:'images/[hash:6][ext]'
                }
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/i,
                type:"asset/resource",
                generator:{
                    filename:'fonts/[hash:6][ext]'
                }
            },
            {
                test: /\.js$/i,
                use:["babel-loader"]
            },
            {
                test:/\.vue$/,
                loader:"vue-loader"
            }
        ]
    }
}