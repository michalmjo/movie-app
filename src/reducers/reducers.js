import { actionTypes } from "../actions/actions";

const primaryReducers = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIE_DATA:
      return state;
    default:
      return console.error("Zjebales");
  }
};

export default primaryReducers;
