module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: '/node_modules',
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-1'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
};
