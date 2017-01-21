import path from 'path';
import dotenv from 'dotenv-safe';

import _ from './util/_';

const requireProcessEnv = (name) => {
  if (!process.env[name]) {
    throw new Error(`You must set the ${name} environment variable`);
  }
  return process.env[name];
};

if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  dotenv.load({
    path: path.join(__dirname, '../.env'),
    sample: path.join(__dirname, '../.env.example'),
  });
}

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    root: path.join(__dirname, '..'),
    port: process.env.PORT || 9000,
    ip: process.env.IP || '0.0.0.0',
    masterKey: requireProcessEnv('MASTER_KEY'),
    mongo: {
      options: {
        db: {
          safe: true,
        },
      },
    },
  },
  development: {
    isDevEnv: true,
    mongo: {
      uri: 'mongodb://192.168.99.100:27017/shout-out',
      options: {
        debug: true,
      },
    },
  },
  production: {
    ip: process.env.IP || undefined,
    port: process.env.PORT || 8080,
    mongo: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost/shout-out',
    },
  },
};

module.exports = _.merge(config.all, config[config.all.env]);
export default module.exports;
