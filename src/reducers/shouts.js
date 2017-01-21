const shout = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SHOUT':
      return {
        id: action.id,
        text: action.text,
        date: action.date,
      };

    default:
      return state;
  }
};

const shouts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SHOUT':
      return [
        ...state,
        shout(undefined, action),
      ];
    default:
      return state;
  }
};

export default shouts;
