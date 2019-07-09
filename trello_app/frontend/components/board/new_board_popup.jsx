import React from "react";
import BoardForm from "./board_form";

class NewBoardPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <li className="boards-list-item">
        <div className="board-tile.mod-add">
          <p className="add-board" onClick={this.togglePopup.bind(this)}>
            <span className="board-tile-fade" />
            New Board
          </p>
        </div>
        <div>
          {this.state.showPopup ? (
            <BoardForm
              closePopup={this.togglePopup.bind(this)}
              createBoard={this.props.createBoard}
            />
          ) : null}
        </div>
      </li>
    );
  }
}

export default NewBoardPopup;

// closePopup={this.togglePopup.bind(this)}
