// import { connect } from "react-redux";
// import BoardShow from "./show_board";
// import { fetchBoard } from "../../actions/board_actions";
// import { sort } from "../../actions/lists_actions";

// const msp = (state, ownProps) => {
//   return {
//     board: state.entities.boards[ownProps.match.params.boardId]
//   };
// };

// const mdp = dispatch => ({
//   fetchBoard: id => dispatch(fetchBoard(id))
//   // sort: (
//   //   droppableIdStart,
//   //   droppableIdEnd,
//   //   droppableIndexStart,
//   //   droppableIndexEnd,
//   //   draggableId,
//   //   type,
//   //   id
//   // ) =>
//   //   dispatch(
//   //     sort(
//   //       droppableIdStart,
//   //       droppableIdEnd,
//   //       droppableIndexStart,
//   //       droppableIndexEnd,
//   //       draggableId,
//   //       type,
//   //       id
//   //     )
//   //   )
// });

// export default connect(
//   msp,
//   mdp
// )(BoardShow);
