/* eslint no-param-reassign: ["error", { "props": false }]*/

import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../config';
import webpackConfig from '../../webpack.config';

export default (routes) => {
  const app = express();
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(routes);

  const isDev = process.env.NODE_ENV === 'development';
  if (isDev) {
    const compiler = webpack(webpackConfig);
    const middleware = webpackMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false,
      },
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('*', (req, res) => {
      res.write(middleware.fileSystem.readFileSync(path.join(config.root, '/dist/index.html')));
      res.end();
    });
  } else {
    app.use(express.static(`${config.root}/dist`));
    app.get('*', (req, res) => {
      res.sendFile(path.join(config.root, '/dist/index.html'));
    });
  }

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = isDev ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  return app;
};
