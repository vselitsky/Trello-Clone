import { RECEIVE_CARD, RECEIVE_CARDS } from "../actions/cards_actions";
import { RECEIVE_LIST } from "../actions/lists_actions";
import { RECEIVE_BOARD, RECEIVE_BOARDS } from "../actions/board_actions";
import merge from "lodash/merge";

const initialState = {};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BOARD:
      if (action.board.lists && action.board.lists.cards) {
        const newReceivedCard = Object.keys(action.board.lists.cards);
        const newCard2 = {};
        newReceivedCard.forEach(ele => {
          let numEle = Number(ele);
          let newCardKey = `card-${ele}`;
          newCard2[newCardKey] = action.board.lists.cards[numEle];
        });
        return merge({}, state, newCard2);
      } else {
        return state;
      }
    case RECEIVE_BOARDS:
      const newReceivedCard3 = Object.keys(action.boards.lists.cards);
      const newCard3 = {};
      newReceivedCard3.forEach(ele => {
        let numEle = Number(ele);
        let newCardKey = `card-${ele}`;
        newCard3[newCardKey] = action.boards.lists.cards[numEle];
      });
      return merge({}, state, newCard3);
    case RECEIVE_LIST:
      const allCards = action.list.cards;
      return merge({}, state, allCards);
    case RECEIVE_CARDS:
      return merge({}, action.cards);
    case RECEIVE_CARD:
      let newCard = { [`card-${action.card.id}`]: action.card };
      return merge({}, state, newCard);
    default:
      return state;
  }
};

export default cardsReducer;
