import { connect } from "react-redux";
import BoardShow from "./show_board";
import { fetchBoard } from "../../actions/board_actions";

const msp = (state, ownProps) => {
  return {
    board: state.entities.boards[ownProps.match.params.boardId]
  };
};

const mdp = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id))
});

export default connect(
  msp,
  mdp
)(BoardShow);
