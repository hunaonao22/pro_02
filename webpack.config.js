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
    devServer:{   
        port:30000,
        open : true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:join(__dirname,'/public/index.html')
        })
    ],
    module:{
        rules:[
            {
                test:/\.css/i,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.less/i,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.(png|gif|jpg|jpge)$/i,
                type:"asset/resource"
            }
        ]
    }
}