import { combineReducers } from "redux";

import entities from "./entities_reducer";
import session from "./session_reducer";
import errors from "./errors_reducer";
import ui from "./ui_reducer";
import activeBoardReducer from "./active_board_reducer";
import activeCardReducer from "./active_card_reducer";

const rootReducer = combineReducers({
  entities,
  session,
  errors,
  ui,
  activeBoard: activeBoardReducer,
  activeCard: activeCardReducer
});

export default rootReducer;
