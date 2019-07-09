import { connect } from "react-redux";
import { createBoard } from "../../actions/board_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import BoardForm from "./board_form";
import NewBoardPopup from "./new_board_popup";

const msp = ({ errors }) => {
  return { errors: errors.boardErrors };
};

const mdp = dispatch => {
  return {
    createBoard: board => dispatch(createBoard(board)),
    closeModal: () => dispatch(closeModal())
  };
};

// export default connect(
//   msp,
//   mdp
// )(BoardForm);
export default connect(
  msp,
  mdp
)(BoardForm);
