/* eslint no-unused-vars: "off"*/
/* eslint no-param-reassign: "off"*/
/* eslint import/no-extraneous-dependencies: "off" */
import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import session from './session';
import passport from './passport';
import config from '../config';
import webpackConfig from '../../webpack.config';

export default (routes) => {
  const app = express();
  app.use(helmet());
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(session);
  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/api', routes);

  const isDev = process.env.NODE_ENV === 'development';
  app.use(express.static(`${config.root}/dist`));
  app.get('*', (req, res) => {
    res.sendFile(path.join(config.root, '/dist/index.html'));
  });

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = isDev ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  return app;
};
