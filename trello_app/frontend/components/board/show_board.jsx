import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId);
  }

  render() {
    // console.log(this.props.board);
    return (
      <div>
        <NavBarContainer />
        <div>
          <h3>{this.props.board.title}</h3>
        </div>
      </div>
    );
  }
}

export default BoardShow;
