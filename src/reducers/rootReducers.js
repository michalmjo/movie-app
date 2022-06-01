import { combineReducers } from "redux";

import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  movieList: movieReducer,
});

export default rootReducer;
