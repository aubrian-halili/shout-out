#!/usr/bin/env node
/* eslint no-use-before-define: "off"*/
import http from 'http';
import express from './services/express';
import mongoose from './services/mongoose';

import logger from './util/logger';
import api from './api';
import config from './config';
import userList from '../db-backup/users.json';
import User from './models/User';
import _ from './util/_'

const app = express(api);
mongoose.connect(config.mongo.uri);
mongoose.connection.on('open', () => {
  User.remove({}, () => {
    _.forEach(userList, (data) => {
      const user = new User({
        _id: mongoose.Types.ObjectId(data._id),
        name: data.name,
        username: data.username,
        password: data.password,
        following: data.following,
      });
      user.save((err, newUser) => {
        logger.log('User added: ', newUser);
      });
    });
    // User.collection.insert(userList, (a1, b1, c1, d1) => {
    //   const i = 0;
    // })
  });
});

const port = normalizePort(process.env.PORT || config.port);
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const portValue = parseInt(val, 10);

  if (isNaN(portValue)) {
    // named pipe
    return val;
  }

  if (portValue >= 0) {
    // port number
    return portValue;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  logger.debug(`Listening on ${bind}`);
}

/**
 * Socket IO
 */
const io = require('socket.io')(server);
io.on('connection', (socket) => {
  socket.on('broadcast', ({ room, data }) => {
    socket.join(room);
    socket.emit(room, data);
  });
});
