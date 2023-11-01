const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({   //创建插件的实例对象
    template: './src/index.html', //指定要用到的模板文件【也就是写index.html的路径】
    filename: 'index.html' //指定生成文件的文件名称，该文件存在与内存中，在目录中不显示

})

const VueLoaderPlugin = require('vue-loader/dist/plugin').default
// const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    // 编译模式，两个可选值--development，production
    mode: 'development',
    // 手动指定打包的出口与入口
    // __dirname表示现在这个config文件所出的文件 也就是根目录中
    entry: path.join(__dirname, './src/index.js'),  //打包文件入口的路径（绝对路径）
    output: {
        path: path.join(__dirname, './dist'), //输出文件的存放路径
        filename: 'bundle.js' //输出文件的名称
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './'),
            watch: true
        }
    },
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' }
                ]
            },
            //test表示匹配的文件类型。use表示对应要调用的loader

            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' },
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            },
            {
                test: /\.jpg$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 95071,
                        // name: "[name].[hash:8].[ext]",
                        outputPath: "/",
                        publicPath: '../src/images/',
                        esModule: false,
                    },
                },
                
                // url(http://127.0.0.1:8888/e48a3535d3a9df58ef6e.jpg)
                
                //其中 ？ 之后的是 loader 的参数项； limit 用来指定图片的大小，单位是直接（byte),只有小于limit大小的图片，才会被转换为base64图片
            },

            // 'transform-runtime' 插件告诉 Babel
            // 要引用 runtime 来代替注入。
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test:/\.vue$/,
                use:{loader:'vue-loader'}
            }


        ]
    }

}

