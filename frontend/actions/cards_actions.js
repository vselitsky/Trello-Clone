import * as APIUtil from "../util/card_api_util";

export const RECEIVE_CARD = "RECEIVE_CARD";
export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const SET_ACTIVE_CARD = "SET_ACTIVE_CARD";
export const UPDATE_CARD = "UPDATE_CARD";

const receiveCard = card => ({
  type: RECEIVE_CARD,
  card
});

export const createCard = card => dispatch =>
  APIUtil.createCard(card).then(card => dispatch(receiveCard(card)));

export const fetchAllCards = () => dispatch => {
  APIUtil.fetchAllCards().then(payload => dispatch(receiveCards(payload)));
};

export const editCard = card => dispatch =>
  APIUtil.editCard(card).then(card => dispatch(updateCard(card)));

export const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards
});
export const updateCard = card => ({
  type: UPDATE_CARD,
  card
});

export const setActiveCard = id => {
  return {
    type: SET_ACTIVE_CARD,
    payload: `card-${id}`
  };
};
