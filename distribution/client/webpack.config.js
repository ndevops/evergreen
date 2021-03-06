const path = require('path');

module.exports = {
  entry: {
    main: './ui/index.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
  }
};

