import { RECEIVE_CARD, RECEIVE_CARDS } from "../actions/cards_actions";
import { RECEIVE_LIST } from "../actions/lists_actions";
import { RECEIVE_BOARD, RECEIVE_BOARDS } from "../actions/board_actions";
import merge from "lodash/merge";

const initialState = {};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BOARD:
      const allnewCards = action.board.lists.cards;
      return merge({}, state, allnewCards);
    case RECEIVE_BOARDS:
      const allReceivedCards = action.boards.lists.cards;
      return merge({}, state, allReceivedCards);
    case RECEIVE_LIST:
      const allCards = action.list.cards;
      return merge({}, state, allCards);
    case RECEIVE_CARDS:
      return merge({}, action.cards);
    case RECEIVE_CARD:
      let newCard = { [action.card.id]: action.card };
      return merge({}, state, newCard);
    default:
      return state;
  }
};

export default cardsReducer;
