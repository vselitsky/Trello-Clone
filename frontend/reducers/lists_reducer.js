import {
  RECEIVE_LIST,
  RECEIVE_LISTS,
  DRAG_HAPPENED
} from "../actions/lists_actions";
import { RECEIVE_BOARD, RECEIVE_BOARDS } from "../actions/board_actions";
import { RECEIVE_CARD } from "../actions/cards_actions";
import merge from "lodash/merge";

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOARD:
      const allLists = action.board.lists;
      return merge({}, state, allLists);
    case RECEIVE_BOARDS:
      const allReceivedLists = action.boards.lists;
      return merge({}, state, allReceivedLists);
    case RECEIVE_LISTS:
      // const allLists = action.lists
      // const newAallLists.map
      return merge({}, action.lists);
    case RECEIVE_LIST:
      const receivedList = action.list;

      const newList = { [receivedList.id]: receivedList };
      return merge({}, state, newList);
    case RECEIVE_CARD:
      const list = state[action.card.list_id];
      // const newList = action.list.id;
      const cardOrder = list.card_positions;
      cardOrder.push(action.card.id);
      list.card_positions = cardOrder;
      const updatedList = { [list.id]: list };
      return merge({}, state, updatedList);

    case DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        type
      } = action.payload;

      // draggin lists around - the listOrderReducer should handle this
      if (type === "list") {
        return state;
      }

      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state[droppableIdStart];
        const card = list.card_positions.splice(droppableIndexStart, 1);
        list.card_positions.splice(droppableIndexEnd, 0, ...card);
        return { ...state, [droppableIdStart]: list };
      }

      // other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drag happened
        const listStart = state[droppableIdStart];
        // pull out the card from this list
        const card = listStart.card_positions.splice(droppableIndexStart, 1);
        // find the list where the drag ended
        const listEnd = state[droppableIdEnd];

        // put the card in the new list
        listEnd.card_positions.splice(droppableIndexEnd, 0, ...card);
        return {
          ...state,
          [droppableIdStart]: listStart,
          [droppableIdEnd]: listEnd
        };
      }
      return state;

    default:
      return state;
  }
};

export default listsReducer;
