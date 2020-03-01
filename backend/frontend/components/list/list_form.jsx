import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

class ListForm extends React.Component {
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

    const boardId = parseInt(this.props.match.params.boardId);

    const list = Object.assign({}, this.state, {
      board_id: boardId
    });

    this.props.createList(list);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.updateTitle.bind(this)}
            value={this.state.title}
            placeholder="Add List Title"
          />
          <input type="submit" value="Create List" />
        </form>
      </div>
    );
  }
}

export default withRouter(ListForm);
