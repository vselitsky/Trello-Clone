import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import CreateNewBoardContainer from "../board/create_new_board_container";
import ShowCardFormContainer from "../card/show_card_form_container";
function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "create new board":
      component = <CreateNewBoardContainer />;
      return (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      );
    case "show card form":
      component = <ShowCardFormContainer />;
      return (
        <div className="window-overlay" onClick={closeModal}>
          <div className="window-child" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

// function Modal({ modal, closeModal }) {
//   if (!modal) {
//     return null;
//   }
//   let component;
//   switch (modal) {
//     case "create new board":
//       component = <CreateNewBoardContainer />;
//       break;
//   }
//   return (
//     <div className="modal-background" onClick={closeModal}>
//       <div className="modal-child" onClick={e => e.stopPropagation()}>
//         {component}
//       </div>
//     </div>
//   );
// }
