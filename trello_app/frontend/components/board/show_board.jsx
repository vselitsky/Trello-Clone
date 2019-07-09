import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId);
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.board &&
      prevProps.board.id != this.props.match.params.boardId
    ) {
      this.props.fetchBoard(this.props.match.params.boardId);
    }
  }

  render() {
    const { board } = this.props;
    console.log(board);
    if (!board) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div>
            <NavBarContainer />
          </div>
          <div className="content-board">
            <div className="board-wrapper">
              <div className="board-main-content">
                <div className="board-header">
                  <div className="board-canvas">
                    <div>
                      <h3>{board.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default BoardShow;
