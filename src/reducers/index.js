import { combineReducers } from 'redux';
import login from './login';
import user from './user';
import shout from './shout';

const shoutApp = combineReducers({
  login,
  user,
  shout,
});

export default shoutApp;
