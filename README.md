# React Project Bundled into a Single `script.js` File

This guide explains how to create a React project, bundle it into a single JavaScript file (`script.js`) using Webpack, and run it directly in a web browser.

## Step-by-Step Instructions

### 1. Create a New React Project

1. Open your terminal (Command Prompt, PowerShell, or any terminal of your choice).
2. Run the following command to create a new React app:

   ```bash
    npx create-react-app my-react-app

    cd my-react-app

    npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react style-loader css-loader html-webpack-plugin

    ```
    
### 1. Create a `webpack.config.js` file in the root directory and configure

# Run Webpack to Bundle Your Project

    ```bash npx webpack --config webpack.config.js ```

# Look into the `dist` file.

