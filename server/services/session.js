import session from 'express-session';
import connectRedis from 'connect-redis';

import config from '../config';

const RedisStore = connectRedis(session);

export default session({
  store: new RedisStore({
    host: config.redis.host,
    port: config.redis.port,
  }),
  secret: config.session.secret,
});
