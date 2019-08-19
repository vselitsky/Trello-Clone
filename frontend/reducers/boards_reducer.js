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
      let newBoardtoReturn = { [action.board.id]: action.board };
      return merge({}, obj, newBoardtoReturn);
    case REMOVE_BOARD:
      let nextState = merge({}, obj);
      delete nextState[action.boardId];
      return nextState;
    case RECEIVE_LIST:
      const board = obj[action.list.board_id];
      // const newList = action.list.id;
      const listOrder = board.list_positions;
      const newListId = `list-${action.list.id}`;
      listOrder.push(newListId);
      board.list_positions = listOrder;
      const newBoard = { [board.id]: board };
      return merge({}, obj, newBoard);
    case DRAG_HAPPENED: {
      const { boardID } = action.payload;
      const board = obj[boardID];
      const lists = board.list_positions;

      const {
        droppableIndexEnd,
        droppableIndexStart,

        type
      } = action.payload;

      // draggin lists around
      if (type === "list") {
        const pulledOutList = lists.splice(droppableIndexStart, 1);

        lists.splice(droppableIndexEnd, 0, ...pulledOutList);
        board.list_positions = lists;
        const newBoard = { [board.id]: board };

        return merge({}, obj, newBoard);
      }
      return merge({}, obj);
    }
    default:
      return obj;
  }
};

export default boardsReducer;

// const newBoard = action.board;
// const allLists = newBoard.lists
//   .slice()
//   .sort((a, b) => (a.position > b.position ? 1 : -1));
// newBoard.lists = allLists;

// json.lists do
//   json.array! @board.lists.each do | list |
//     json.extract! list, : id, : position

// end