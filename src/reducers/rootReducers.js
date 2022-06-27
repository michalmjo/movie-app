import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  movieList: movieReducer,
  userReducer,
});

export default rootReducer;
