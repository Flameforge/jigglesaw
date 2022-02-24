const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { merge } = require('webpack-merge')

const base = {
  entry: {
    wagawin: ['app.ts'],
  },
  context: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].[chunkhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: [
          {
            loader: 'ts-loader',
            options: { onlyCompileBundledFiles: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      scriptLoading: 'defer',
    }),
  ],
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.ts', '.js', 'scss'],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
}

const prod = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    publicPath: '/',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css',
      chunkFilename: 'css/[id].[chunkhash:8].css',
    }),
  ],
}

const dev = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    publicPath: 'http://localhost:8080/',
  },
  stats: {
    colors: true,
  },
  devServer: {
    port: 8080,
    historyApiFallback: false,
    hot: true,
  },
  devtool: 'inline-source-map',
}

module.exports = (env) => merge(base, env && env.production ? prod : dev)
