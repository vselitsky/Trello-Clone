import { connect } from "react-redux";
import { fetchAllBoards } from "../../actions/board_actions";
import { logout } from "../../actions/session_actions";
import BoardsIndex from "./boards_index";
const msp = state => ({
  boards: Object.values(state.entities.boards)
});

const mdp = dispatch => ({
  fetchAllBoards: () => dispatch(fetchAllBoards()),
  logout: () => dispatch(logout())
});

export default connect(
  msp,
  mdp
)(BoardsIndex);
