const webpack = require('webpack');
const open = require('open');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}).listen(5000, 'localhost', (err, result) => {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at https://localhost:5000/');
  open('https://localhost:5000/');
});
