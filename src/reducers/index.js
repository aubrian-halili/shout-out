import { combineReducers } from 'redux';
import shouts from './shouts';

const shoutApp = combineReducers({
  shouts,
});

export default shoutApp;
