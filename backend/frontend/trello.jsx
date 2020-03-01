import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import React from "react";
import {
  createBoard,
  fetchAllBoards,
  fetchBoard,
  deleteBoard
} from "./util/board_api_util.js";
import { fetchAllLists } from "./util/list_api_util";
import { createCard } from "./util/card_api_util.js";

import { receiveBoards, receiveBoard } from "./actions/board_actions";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.createBoard = createBoard;
  // window.fetchAllBoards = fetchAllBoards;
  // window.fetchBoard = fetchBoard;
  // window.deleteBoard = deleteBoard;
  // window.receiveBoards = receiveBoards;
  // window.receiveBoard = receiveBoard;
  // TESTING END
  window.store = store;
  // window.fetchAllLists = fetchAllLists;
  // window.createCard = createCard;

  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store} />, root);
});
