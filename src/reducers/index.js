import { combineReducers } from 'redux';
import login from './login';

const shoutApp = combineReducers({
  login,
});

export default shoutApp;
