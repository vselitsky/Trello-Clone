import {
  RECEIVE_LIST,
  RECEIVE_LISTS,
  DRAG_HAPPENED
} from "../actions/lists_actions";
import merge from "lodash/merge";

const listsReducer = (state = {}, action) => {
  // Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIST:
      let newList = { [action.list.id]: action.list };
      return merge({}, state, newList);
    case RECEIVE_LISTS:
      return merge({}, action.lists);

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
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
        return { ...state, [droppableIdStart]: list };
      }

      // other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drag happened
        const listStart = state[droppableIdStart];
        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        // find the list where the drag ended
        const listEnd = state[droppableIdEnd];

        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
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
