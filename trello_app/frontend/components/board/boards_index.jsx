import React from "react";
import { Link } from "react-router-dom";
import NewBoardPopup from "./new_board_popup";
import CreateNewBoardContainer from "./create_new_board_container";
import NavBarContainer from "../nav_bar/nav_bar_container";
//import BoardIndexItem from "./board_index_item";

class BoardsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentBoards: [],
      recentBoardsIds: []
    };
  }
  componentWillMount() {
    this.props.fetchAllBoards();
  }

  updateRecentBoards(board) {
    if (this.state.recentBoardsIds.slice(-4).indexOf(board.id) === -1) {
      this.setState({ recentBoards: [...this.state.recentBoards, board] });
      this.setState({
        recentBoardsIds: [...this.state.recentBoardsIds, board.id]
      });
    }
  }

  render() {
    const allBoards = this.props.boards.map(board => (
      <li className="boards-list-item">
        <Link
          className="board-tile"
          key={board.id}
          onClick={() => this.updateRecentBoards(board)}
          to={`/boards/${board.id}`}
        >
          <span className="board-tile-fade" />
          <div className="board-tile-details">
            <div className="board-tile-details-name">{board.title}</div>
          </div>
        </Link>
      </li>
    ));
    const recentBoards = this.state.recentBoards.slice(-4).map((board, i) => (
      <li className="boards-list-item">
        <Link className="board-tile" key={board.id} to={`/boards/${board.id}`}>
          <span className="board-tile-fade" />
          <div className="board-tile-details">
            <div className="board-tile-details-name">{board.title}</div>
          </div>
        </Link>
      </li>
    ));
    return (
      <div>
        <NavBarContainer />

        <div id="content">
          <div className="member-boards-view">
            <div className="home-sticky-container">
              <div style={{ position: "sticky", top: 0 + "px" }}>
                <nav className="home-left-sidebar-container" />
              </div>
              <div className="all-boards">
                <div style={{ position: "sticky", top: 0 + "px" }}>
                  <div className="content-all_boards">
                    <div>
                      <div className="boards-page-board-section">
                        <div className="recently-viewed-container">
                          <div className="recently-viwed-icon">
                            <span className="icon-clock">
                              <i className="far fa-clock" />
                            </span>
                          </div>
                          <h3 className="recently-viewed-title">
                            Recently Viewed
                          </h3>
                        </div>
                        <ul className="boards-page-board-section-list">
                          {recentBoards}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="boards-page-board-section">
                        <div className="recently-viewed-container">
                          <div className="recently-viwed-icon">
                            <span className="icon-clock">
                              <i className="far fa-user" />
                            </span>
                          </div>
                          <h3 className="recently-viewed-title">
                            Personal Boards
                          </h3>
                        </div>
                        <ul className="boards-page-board-section-list">
                          {allBoards}
                          {this.props.createNewBoard}
                        </ul>
                      </div>
                    </div>
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

export default BoardsIndex;
