import * as APIUtil from "../util/card_api_util";

export const RECEIVE_CARD = "RECEIVE_CARD";

const receiveCard = card => ({
  type: RECEIVE_CARD,
  card
});

export const createCard = card => dispatch =>
  APIUtil.createCard(card).then(card => dispatch(receiveCard(card)));
