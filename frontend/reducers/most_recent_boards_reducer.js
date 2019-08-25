import { UPDATE_MOST_RECENT_BOARDS } from "../actions/board_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
const initialState = [];
const mostRecentBoardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MOST_RECENT_BOARDS:
      return action.recentBoards;
    case RECEIVE_CURRENT_USER:
      return action.currentUser.recent_boards;

    default:
      return state;
  }
};

export default mostRecentBoardsReducer;
