import React from "react";
import { withRouter } from "react-router-dom";
import ls from "local-storage";

class BoardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const board = Object.assign({}, this.state);
    const receivedUser = this.props.user;
    const userID = Number(Object.keys(receivedUser)[0]);
    const currentBoards = this.props.recentActiveBoards.slice();
    const createBoard = board =>
      $.ajax({
        method: "POST",
        url: `/api/boards/`,
        data: { board }
      });
    // .then(() => this.props.closeModal())
    createBoard(board)
      .then(board => {
        if (currentBoards.length > 3) {
          let currents = currentBoards.slice();
          currents.shift();
          let mostRecentBoards = [...currents, String(board.id)];
          let user = Object.assign(
            {},
            {
              recent_boards: mostRecentBoards,
              id: userID
            }
          );
          this.props.update(user);
        } else {
          let mostRecentBoards2 = [...currentBoards, String(board.id)];

          let user = Object.assign(
            {},
            {
              recent_boards: mostRecentBoards2,
              id: userID
            }
          );
          this.props.update(user);
        }
        this.props.history.push(`/boards/${board.id}`);
      })
      .then(() => this.props.closeModal());
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.updateTitle.bind(this)}
            value={this.state.title}
            placeholder="Add Board Title"
          />
          <input type="submit" value="Create Board" />
        </form>
      </div>
    );
  }
}

export default withRouter(BoardForm);
