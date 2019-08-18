import * as APIUtil from "../util/card_api_util";

export const RECEIVE_CARD = "RECEIVE_CARD";
export const RECEIVE_CARDS = "RECEIVE_CARDS";

const receiveCard = card => ({
  type: RECEIVE_CARD,
  card
});

export const createCard = card => dispatch =>
  APIUtil.createCard(card).then(card => dispatch(receiveCard(card)));

export const fetchAllCards = () => dispatch => {
  APIUtil.fetchAllCards().then(payload => dispatch(receiveCards(payload)));
};

export const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards
});
