const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    main: path.resolve(__dirname, './src/main.js'), 
    pets: path.resolve(__dirname, './src/pets.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', 
    clean: true,
    //assetModuleFilename: 'assets/images/[name][ext]',
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 2000,
    open: true,
    hot: true,
    liveReload: true,
    client: {
      overlay: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/main.html'),
      filename: 'main.html',
      chunks: ['main'], 
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/pets.html'),
      filename: 'pets.html',
      chunks: ['pets'], 
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', 
    }),
    /*palgin to copy resurses*/
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/img', to: 'assets/img' }, 
      ],
    }),

  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'], 
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', 
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/inline', 
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'], 
  },
};