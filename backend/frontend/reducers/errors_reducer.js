import { combineReducers } from "redux";

import session from "./session_errors_reducer";
import boardErrors from "./boards_errors_reducer";

export default combineReducers({
  session,
  boardErrors
});
