const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // Corrected the output path
    filename: 'bundle.js',
    publicPath: '/', // Important for client-side routing
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: [/node_modules/, /dotenv/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource', // Use asset modules instead of file-loader in Webpack 5
        generator: {
          filename: 'assets/images/[name].[hash][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 8080, // Set your preferred port
    hot: true,
    open: true,
    historyApiFallback: true, // Enables client-side routing
    proxy: {
      '/api': 'http://localhost:5001', // Proxies API calls to your backend
    },
  },
};
