
const path= require('path');
module.exports={
    mode:"development",
    entry:"./index.js",
    output:{
           path:path.resolve(__dirname,"dist"),
           filename:"pagination.js",
           libraryTarget:"umd"
    },
    module:{
        rules:[
            {
                test: /\.less$/i,
                use: ['style-loader','css-loader','less-loader']
            }
        ]
    }
};