import { SET_ACTIVE_CARD } from "../actions/cards_actions";

const initialState = null;

const activeCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CARD: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default activeCardReducer;
