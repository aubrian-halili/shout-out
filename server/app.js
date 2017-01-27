#!/usr/bin/env node
/* eslint no-use-before-define: "off"*/
import http from 'http';
import express from './services/express';
import mongoose from './services/mongoose';

import logger from './util/logger';
import api from './api';
import config from './config';

const app = express(api);
mongoose.connect(config.mongo.uri);

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
