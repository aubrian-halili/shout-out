import { combineReducers } from 'redux';
import login from './login';
import user from './user';

const shoutApp = combineReducers({
  login,
  user,
});

export default shoutApp;
