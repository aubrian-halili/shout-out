const following = (state = [], action) => {
  switch (action.type) {
    case 'SET_FOLLOWING':
      return action.users;
    default:
      return state;
  }
};

export default following;
