import { combineReducers } from "redux";
import swapiReducer from "./swapiReducer";

import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  swData: swapiReducer,
  form: formReducer,
});
