import axios from 'axios';

export const setFollowing = (users) => {
  return {
    type: 'SET_FOLLOWING',
    users,
  };
};

export const getFollowing = () => {
  return (dispatch, getState) => {
    const { user: { following } } = getState();
    axios.get('/api/users', {
      params: { id: following },
    }).then(({ data }) => {
      dispatch(setFollowing(data));
    });
  };
};
