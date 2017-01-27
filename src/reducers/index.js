import { combineReducers } from 'redux';
import login from './login';
import user from './user';
import shout from './shout';
import following from './following';

const shoutApp = combineReducers({
  login,
  user,
  shout,
  following,
});

export default shoutApp;
