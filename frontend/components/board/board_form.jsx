import React from "react";
import { withRouter } from "react-router-dom";

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
    const createBoard = board =>
      $.ajax({
        method: "POST",
        url: `/api/boards/`,
        data: { board }
      });
    // .then(() => this.props.closeModal())
    createBoard(board)
      .then(board => this.props.history.push(`/boards/${board.id}`))
      .then(() => this.props.closeModal());

    console.log(this.props);
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
