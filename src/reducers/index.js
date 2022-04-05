import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducers";

/// Replace me just make app run with no error when init or no reducers
export default combineReducers({
  auth: authReducer,
  form: formReducer, // Redux-Form
  streams: streamReducer,
});
