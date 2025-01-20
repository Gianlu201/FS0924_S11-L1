const initialState = {
  favCompanies: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':
      return {
        ...state,
        favCompanies: state.favCompanies.concat(action.payload),
      };

    default:
      return state;
  }
};

export default mainReducer;
