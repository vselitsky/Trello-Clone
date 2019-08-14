import {
  RECEIVE_BOARDS,
  RECEIVE_BOARD,
  REMOVE_BOARD
} from "../actions/board_actions";

import { RECEIVE_LIST } from "../actions/lists_actions";
import merge from "lodash/merge";
import { DRAG_HAPPENED } from "../actions/lists_actions";

const boardsReducer = (obj = {}, action) => {
  Object.freeze(obj);

  switch (action.type) {
    case RECEIVE_BOARDS:
      return merge({}, action.boards);
    case RECEIVE_BOARD:
      const newBoard = action.board;
      const allLists = newBoard.lists
        .slice()
        .sort((a, b) => (a.position > b.position ? 1 : -1));
      newBoard.lists = allLists;
      let newBoardtoReturn = { [newBoard.id]: newBoard };
      return merge({}, obj, newBoardtoReturn);
    case REMOVE_BOARD:
      let nextState = merge({}, obj);
      delete nextState[action.boardId];
      return nextState;
    case RECEIVE_LIST:
      const board = obj[action.list.board_id];
      const newList = action.list.id;
      board.list_positions.push(newList);

      return merge({}, obj, board);
    case DRAG_HAPPENED: {
      const { boardID } = action.payload;
      const board = obj[boardID];
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

        return merge({}, obj, board);
      }
      return merge({}, obj);
    }
    default:
      return obj;
  }
};

export default boardsReducer;
