import { connect } from "react-redux";
import { createList } from "../../actions/lists_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import ListForm from "./list_form";

const msp = state => {};

const mdp = dispatch => {
  return {
    createList: list => dispatch(createList(board)),
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
)(ListForm);
