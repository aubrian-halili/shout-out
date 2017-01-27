import axios from 'axios';
import { browserHistory } from 'react-router';
import _ from '../util/_'

export const setShout = (shout) => {
  return {
    type: 'SET_SHOUT',
    shout,
  };
};

export const setShoutList = (shouts) => {
  return {
    type: 'SET_SHOUT_LIST',
    shouts,
  };
};

export const setFormatValid = (isValid) => {
  return {
    type: 'SET_SHOUT_FORMAT_VALID',
    isValid,
  };
};

export const setShoutError = (error) => {
  return {
    type: 'SET_SHOUT_ERROR',
    error,
  };
};

export const isFormatValid = () => {
  return (dispatch, getState) => {
    const { shout: { form: { data } } } = getState();
    if (!_.isEmpty(data.text)) {
      dispatch(setFormatValid(true));
    } else {
      dispatch(setFormatValid(false));
    }
  };
};

export const validate = () => {
  return (dispatch, getState) => {
    const { shout: { form: { data } } } = getState();
    if (_.isEmpty(data.text)) {
      dispatch(setShoutError('Invalid value for shout'));
    } else {
      dispatch(setShoutError(''));
    }
  };
};

export const submitShout = () => {
  return (dispatch, getState) => {
    const { shout: { form: { data } } } = getState();
    axios.post('/api/shouts', data)
    .then(() => {
      dispatch(setShout(''));
      browserHistory.push('/dashboard/feeds');
    })
    .catch(() => {
      dispatch(setShoutError('An unexpected error occured. Please be patient'));
    });
  };
};

export const getShoutList = (userId) => {
  return (dispatch) => {
    axios.get('/api/shouts/following', {
      params: { userId },
    }).then(({ data }) => {
      dispatch(setShoutList(data));
    });
  };
};
