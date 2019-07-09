import {
  RECEIVE_BOARDS,
  RECEIVE_BOARD,
  REMOVE_BOARD
} from "../actions/board_actions";
import merge from "lodash/merge";

const boardsReducer = (obj = {}, action) => {
  Object.freeze(obj);

  switch (action.type) {
    case RECEIVE_BOARDS:
      return merge({}, action.boards);
    case RECEIVE_BOARD:
      let newBoard = { [action.board.id]: action.board };
      return merge({}, obj, newBoard);
    case REMOVE_BOARD:
      let nextState = merge({}, obj);
      delete nextState[action.boardId];
      return nextState;
    default:
      return obj;
  }
};

export default boardsReducer;
