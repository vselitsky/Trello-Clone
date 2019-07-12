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
    this.props
      .createBoard(board)
      .then(this.props.closeModal())
      .then(board => this.props.history.push(`/boards/`));
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
