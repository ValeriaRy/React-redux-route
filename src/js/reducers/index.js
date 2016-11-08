import { combineReducers } from "redux";
import articles from "./articlesReducer";
import user from "./userReducer";

export default combineReducers({
  articles,
  user
})