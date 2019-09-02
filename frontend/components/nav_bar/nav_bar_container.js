import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import NavBar from "./nav_bar";

const msp = state => ({
  username: Object.values(state.entities.users)[0].username
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: () => dispatch(openModal("create new board")),
  openMenuModal: () => dispatch(openModal("show nav menu"))
});

export default connect(
  msp,
  mdp
)(NavBar);
