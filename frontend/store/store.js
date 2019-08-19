import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import * as APIUtil from "../util/board_api_util";
import * as APBUtil from "../util/list_api_util";
import { receiveBoard } from "../actions/board_actions";
import { receiveList } from "../actions/lists_actions";

import rootReducer from "../reducers/root_reducer";

const persistenceActionTypes = [
  "DRAG_HAPPENED",
  "RECEIVE_LIST",
  "RECEIVE_CARD"
];
// notPersistenceActionTypes = ['ADD_ITEM_TO_CART', 'REMOVE_ITEM_FROM_CART', 'NAVIGATE']

const persistenceMiddleware = store => dispatch => action => {
  const result = dispatch(action);
  if (persistenceActionTypes.indexOf(action.type) > -1) {
    if (action.type === "RECEIVE_LIST") {
      let newState = store.getState();
      saveUpdatedBoard(action, newState);
    } else if (action.type === "RECEIVE_CARD") {
      let newState = store.getState();
      saveUpdatedList(action, newState);
    } else {
      if (action.payload.type === "list") {
        let newState = store.getState();
        sendToBackendBoard(action, newState);
      } else if (
        action.payload.droppableIdStart === action.payload.droppableIdEnd &&
        action.payload.type === "card"
      ) {
        let newState = store.getState();
        sendToBackendSameList(action, newState);
      } else if (
        action.payload.droppableIdStart !== action.payload.droppableIdEnd &&
        action.payload.type === "card"
      ) {
        let newState = store.getState();
        sendToBackendDifferentLists(action, newState);
      }
    }
  }
  return result;
};

const saveUpdatedList = (action, newState) => {
  const updatedList3 = store.getState().entities.lists[
    `list-${action.card.list_id}`
  ];
  const list3 = Object.assign(
    {},
    {
      id: updatedList3.id,
      card_positions: updatedList3.card_positions
    }
  );

  APBUtil.updateCardPositions(list3);
};

const saveUpdatedBoard = (action, newState) => {
  const updatedBoard1 = store.getState().entities.boards[action.list.board_id];
  const board1 = Object.assign(
    {},
    {
      id: updatedBoard1.id,
      list_positions: updatedBoard1.list_positions
    }
  );
  // déjà vu
  APIUtil.updateBoard(board1);
  // .then(checkStatus)
  // .then(response => response.json())
  // .then(board => {
  //     store.dispatch(receiveBoard(board));
  // });
  // .catch(error => {
  //   console.error(error);
  //   store.dispatch(actionCreators.receiveErrors(error));
  // });
};

const sendToBackendDifferentLists = (action, newState) => {
  const updatedList1 = store.getState().entities.lists[
    `list-${action.payload.droppableIdStart}`
  ];
  const updatedList2 = store.getState().entities.lists[
    `list-${action.payload.droppableIdEnd}`
  ];

  const list = Object.assign(
    {},
    {
      id: updatedList1.id,
      card_positions: updatedList1.card_positions
    }
  );
  const list2 = Object.assign(
    {},
    {
      id: updatedList2.id,
      card_positions: updatedList2.card_positions
    }
  );

  APBUtil.updateCardPositions(list);
  APBUtil.updateCardPositions(list2);
};

const sendToBackendSameList = (action, newState) => {
  const updatedList = store.getState().entities.lists[
    `list-${action.payload.droppableIdStart}`
  ];
  const list = Object.assign(
    {},
    {
      id: updatedList.id,
      card_positions: updatedList.card_positions
    }
  );

  APBUtil.updateCardPositions(list);

  //   .then(list => {
  //     store.dispatch(receiveList(list));
  //   });
};

const sendToBackendBoard = (action, newState) => {
  const updatedBoard = store.getState().entities.boards[action.payload.boardID];
  const board = Object.assign(
    {},
    {
      id: updatedBoard.id,
      list_positions: updatedBoard.list_positions
    }
  );
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
