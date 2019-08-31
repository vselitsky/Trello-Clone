import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import * as APIUtil from "../util/board_api_util";
import * as APBUtil from "../util/list_api_util";
import * as APCUtil from "../util/card_api_util";
import * as APSUtil from "../util/session_api_util";
import { receiveBoard } from "../actions/board_actions";
import { updateCard, removeCard } from "../actions/cards_actions";
import { receiveList } from "../actions/lists_actions";

import rootReducer from "../reducers/root_reducer";

const persistenceActionTypes = [
  "DRAG_HAPPENED",
  "RECEIVE_LIST",
  "RECEIVE_CARD",
  "REMOVE_CARD",
  "REMOVE_LIST",
  "REMOVE_BOARD"
];
// notPersistenceActionTypes = ['ADD_ITEM_TO_CART', 'REMOVE_ITEM_FROM_CART', 'NAVIGATE']

const persistenceMiddleware = store => dispatch => action => {
  //const oldState = store.getState();

  const result = dispatch(action);

  if (persistenceActionTypes.indexOf(action.type) > -1) {
    if (action.type === "REMOVE_BOARD") {
      let newState = store.getState();
      updateUser(action, newState);
    } else if (action.type === "REMOVE_LIST") {
      let newState = store.getState();
      removeListfromBoard(action, newState);
    } else if (action.type === "REMOVE_CARD") {
      let newState = store.getState();
      removeCardfromList(action, newState);
    } else if (action.type === "RECEIVE_LIST") {
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
        //persistUpdatedCard(action, store);
        let newState = store.getState();
        sendToBackendDifferentLists(action, newState);
      }
    }
  }
  return result;
};

// const persistUpdatedCard = (action, store) => {
//   const listStart = store.getState().entities.lists[
//     `list-${action.payload.droppableIdStart}`
//   ];

//   const cardID = listStart.card_positions.splice(
//     action.payload.droppableIndexStart,
//     1
//   );
//   const oldCard = store.getState().entities.cards[cardID];
//   const listEnd = store.getState().entities.lists[
//     `list-${action.payload.droppableIdEnd}`
//   ];

//   debugger;

//   const newCard = Object.assingn(
//     {},
//     {
//       id: oldCard.id,
//       list_id: listEnd.id
//     }
//   );

//   APCUtil.editCard(newCard);
// };

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

const updateUser = (action, newState) => {
  const user = store.getState().entities.users[action.userId];
  const user3 = Object.assign(
    {},
    {
      id: user.id,
      recent_boards: user.recent_boards
    }
  );
  APSUtil.updateRecentBoards(user3);
};

const removeCardfromList = (action, newState) => {
  const updatedList4 = store.getState().entities.lists[`list-${action.listId}`];
  const list4 = Object.assign(
    {},
    {
      id: updatedList4.id,
      card_positions: updatedList4.card_positions
    }
  );

  APBUtil.updateCardPositions(list4);
};
const removeListfromBoard = (action, newState) => {
  const updatedBoard4 = store.getState().entities.boards[action.boardId];
  const board4 = Object.assign(
    {},
    {
      id: updatedBoard4.id,
      list_positions: updatedBoard4.list_positions
    }
  );

  APIUtil.updateListPositions(board4);
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
  APIUtil.updateListPositions(board1);
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

  updatedList2.card_positions.forEach(id => {
    let card2 = store.getState().entities.cards[id];

    if (card2.list_id !== updatedList2.id) {
      let newCard2 = Object.assign(
        {},
        {
          id: card2.id,
          list_id: updatedList2.id
        }
      );

      APCUtil.editCard(newCard2).then(card => {
        store.dispatch(updateCard(card));
      });
    }
  });
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
  APIUtil.updateListPositions(board)
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
