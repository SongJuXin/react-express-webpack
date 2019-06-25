var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const config = require('../config/webpack.dev.config');
const webpack=require('webpack')

let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');

var ordersRouter = require('./routes/orders');
var usersRouter = require('./routes/users');

var app = express();
if(process.env.NODE_ENV=='development'){
  var compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}




// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/orders', ordersRouter);
app.use('/api/users', usersRouter);
app.use(express.static(path.join(process.cwd(), 'static')))
app.use(function (req,res) {
  if(process.env.NODE_ENV=='development'){
    const filepath=path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filepath, function(err, result) {
      if (err) {
        // something error
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  }else{
    console.log('index')
    res.sendFile(path.join(process.cwd(), 'static','index.html'))
  }
})

// catch 404 and forward to error handler



module.exports = app;
