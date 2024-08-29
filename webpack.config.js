const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // Set to 'development' for development builds
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'script.js', // Output bundle filename
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply this rule to JavaScript and JSX files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel for transpiling
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Use presets for modern JavaScript and React
          },
        },
      },
      {
        test: /\.css$/, // Apply this rule to CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Apply this rule to image files
        type: 'asset/resource', // Use asset/resource to emit files and export URLs
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template file
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions automatically
  },
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      // Custom middleware setup if needed
      return middlewares;
    },
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from the 'dist' directory
    },
    compress: true, // Enable gzip compression
    port: 3000, // Port for the dev server
  },
};
