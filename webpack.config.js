const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //안쓰는 파일 제거 해주는 플러그인

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + "/build")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules',
        use: ['babel-loader']
      },
      {
      test: /\.html$/,
      use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false //코드 최적화 옵션
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] //오른쪽부터 왼쪽 순으로 실행 됨
      }
    ]
  },
  plugins: [
    //HtmlWebPackPlugin객체는 웹팩 빌드시 output에 있는 bundle.js를 자동으로 import 시킨다.
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html' //아웃풋으로 출력할 파일 이름
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: path.resolve('./build'),
    index: 'index.html',
    port: 3000,
  }
}