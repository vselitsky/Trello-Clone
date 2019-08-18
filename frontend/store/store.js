import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import * as APIUtil from "../util/board_api_util";
import { receiveBoard } from "../actions/board_actions";

import rootReducer from "../reducers/root_reducer";

const persistenceActionTypes = ["DRAG_HAPPENED"];
// notPersistenceActionTypes = ['ADD_ITEM_TO_CART', 'REMOVE_ITEM_FROM_CART', 'NAVIGATE']

const persistenceMiddleware = store => dispatch => action => {
  const result = dispatch(action);
  if (persistenceActionTypes.indexOf(action.type) > -1) {
    // or maybe you could filter by the payload. Ex:
    // if (action.timestamp) {

    if (action.payload.type === "list") {
      let newState = store.getState();
      sendToBackend(action, newState);
    }
  }
  return result;
};

const sendToBackend = (action, newState) => {
  const updatedBoard = store.getState().entities.boards[action.payload.boardID];
  const board = {
    id: updatedBoard.id,
    list_positions: updatedBoard.list_positions
  };
  // déjà vu
  APIUtil.updateBoard(board)
    // .then(checkStatus)
    // .then(response => response.json())
    .then(board => {
      store.dispatch(receiveBoard(board));
    });
  // .catch(error => {
  //   console.error(error);
  //   store.dispatch(actionCreators.receiveErrors(error));
  // });
};

const configureStore = (preloadedState = {}) =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger, persistenceMiddleware)
  );

export default configureStore;
