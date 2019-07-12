import { RECEIVE_CARD } from "../actions/cards_actions";
import merge from "lodash/merge";

const initialState = {};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CARD:
      let newCard = { [action.card.id]: action.card };
      return merge({}, state, newCard);
    default:
      return state;
  }
};

export default cardsReducer;
