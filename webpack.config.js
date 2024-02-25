const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   mode: 'development',
   entry: {
      filename: path.resolve(__dirname, 'src/index.js'),
   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      assetModuleFilename: '[name][ext]',
      clean: true,
   },
   performance: {
      hints: false,
      maxAssetSize: 512000,
      maxEntrypointSize: 512000,
   },
   devServer: {
      port: 3000,
      compress: true,
      hot: true,
      static: {
         directory: path.join(__dirname, 'dist'),
      },
   },
   module: {
      rules: [
         {
            test: /\.(s[ac]ss|css)$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
         {
            test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            type: 'asset/resource',
         },
      ],
   },
   plugins: [
      new htmlWebpackPlugin({
         title: 'Cyberpunk 2077',
         filename: 'index.html',
         template: './src/index.html',
      }),
   ],
};
