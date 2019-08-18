import { connect } from "react-redux";
import { fetchAllBoards } from "../../actions/board_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";
import { fetchAllLists } from "../../actions/lists_actions";
import { fetchAllCards } from "../../actions/cards_actions";
import React from "react";
import BoardsIndex from "./boards_index";
const msp = state => ({
  boards: Object.values(state.entities.boards)
});

const mdp = dispatch => ({
  fetchAllBoards: () => dispatch(fetchAllBoards()),
  fetchAllLists: () => dispatch(fetchAllLists()),
  fetchAllCards: () => dispatch(fetchAllCards()),
  logout: () => dispatch(logout()),
  createNewBoard: (
    <li className="boards-list-item">
      <div className="board-tile.mod-add">
        <p
          className="add-board"
          onClick={() => dispatch(openModal("create new board"))}
        >
          <span className="board-tile-fade" />
          New Board
        </p>
      </div>
    </li>
  )
});

export default connect(
  msp,
  mdp
)(BoardsIndex);
