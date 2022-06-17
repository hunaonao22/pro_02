const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // mode:'production',
    mode:'development',
    entry:'./src/main.js',
    output:{
        path:join(__dirname,'lib'),
        filename:'webpack-demo.js',
        clean:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:join(__dirname,'/public/index.html')
        })
    ]
}