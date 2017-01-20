module.exports = {
  entry: {
    main: './app/assets/js/main.js'
  },
  output: {
    path: './app/assets/js',
    filename: 'scripts.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        query: { presets: ['es2015'] },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
