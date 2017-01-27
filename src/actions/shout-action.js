import axios from 'axios';
import { browserHistory } from 'react-router';
import _ from '../util/_';

export const setShout = (shout) => {
  return {
    type: 'SET_SHOUT',
    shout,
  };
};

export const deleteShout = (id) => {
  return {
    type: 'DELETE_SHOUT',
    id,
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

export const addShout = () => {
  return (dispatch, getState) => {
    const { shout: { form: { data } } } = getState();
    axios.post('/api/shouts', data)
    .then(({ data: { user } }) => {
      dispatch(setShout({
        id: '',
        text: '',
      }));
      browserHistory.push(`/dashboard/${user}`);
    })
    .catch(() => {
      dispatch(setShoutError('An unexpected error occured. Please be patient'));
    });
  };
};

export const updateShout = () => {
  return (dispatch, getState) => {
    const { shout: { form: { data } } } = getState();
    axios.put(`/api/shouts/${data.id}`, { text: data.text })
    .then(({ data: { user } }) => {
      dispatch(setShout({
        id: '',
        text: '',
      }));
      browserHistory.push(`/dashboard/${user}`);
    })
    .catch(() => {
      dispatch(setShoutError('An unexpected error occured. Please be patient'));
    });
  };
};

export const submitShout = () => {
  return (dispatch, getState) => {
    const { shout: { form: { data } } } = getState();
    if (data.id) {
      dispatch(updateShout());
    } else {
      dispatch(addShout());
    }
  };
};

export const selectShout = (id) => {
  return (dispatch, getState) => {
    const { shout: { list } } = getState();
    const shout = _.head(_.filter(list, ['id', id]));
    dispatch(setShout({
      id: shout.id,
      text: shout.text,
    }));
    browserHistory.push('/dashboard');
  };
};

export const deleteShoutFromList = (id) => {
  return (dispatch) => {
    axios.delete(`/api/shouts/${id}`)
    .then(() => {
      dispatch(deleteShout(id));
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
