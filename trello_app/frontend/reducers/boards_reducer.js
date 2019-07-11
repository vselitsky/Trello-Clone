import {
  RECEIVE_BOARDS,
  RECEIVE_BOARD,
  REMOVE_BOARD
} from "../actions/board_actions";
import merge from "lodash/merge";
import { DRAG_HAPPENED } from "../actions/lists_actions";

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
    case DRAG_HAPPENED: {
      const { board } = action.payload;
      const lists = board.lists;
      const {
        droppableIndexEnd,
        droppableIndexStart,

        type
      } = action.payload;

      // draggin lists around
      if (type === "list") {
        const pulledOutList = lists.splice(droppableIndexStart, 1);
        lists.splice(droppableIndexEnd, 0, ...pulledOutList);
        board.lists = lists;

        return merge(obj, { [board.id]: board });
      }
      return merge({}, obj);
    }
    default:
      return obj;
  }
};

export default boardsReducer;
