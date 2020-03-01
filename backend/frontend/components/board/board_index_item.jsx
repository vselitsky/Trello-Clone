import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import ls from "local-storage";
import { update } from "../../util/session_api_util";

const BoardThumbnail = styled.div`
  margin-right: 0;
  width: 20%
  border-radius: 3px;
  display: flex;
  margin: 0 2% 8px 0;
//   background-size: cover;
//   background-position: 50%;
  color: #fff;
  line-height: 20px;
  padding: 8px;
 position: relative;
  text-decoration: none;
  background-color: rgb(0, 174, 204);
  cursor: pointer;
`;

const BoardTitle = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  font-size: 16px;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
    Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
  color: #fff;
  line-height: 20px;
  display: flex;
  height: 80px;
  flex-wrap: wrap;
  //   position: relative;
  //   flex-direction: column;
  //   justify-content: space-between;
`;

class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const boardId = this.props.board.id;

    if (this.props.recentBoards !== undefined) {
      const receivedUser = this.props.user;
      const userID = Number(Object.keys(receivedUser)[0]);
      const currentBoards = this.props.recentBoards.slice(-4);

      //this.props.history.push(`/boards/${boardId}`);
      if (currentBoards.indexOf(String(boardId)) === -1) {
        if (currentBoards.length > 3) {
          let currents = currentBoards.slice();
          currents.shift();
          let mostRecentBoards = [...currents, boardId];
          let user = Object.assign(
            {},
            {
              recent_boards: mostRecentBoards,
              id: userID
            }
          );
          this.props.update(user);
          //this.props.updateMostRecentBoards(mostRecentBoards);
        } else {
          let mostRecentBoards2 = [...currentBoards, boardId];

          let user = Object.assign(
            {},
            {
              recent_boards: mostRecentBoards2,
              id: userID
            }
          );
          this.props.update(user);
          //this.props.updateMostRecentBoards(mostRecentBoards2);
        }
      }
    }
    this.props.history.push(`/boards/${boardId}`);
  }

  render() {
    return (
      <BoardThumbnail onClick={this.handleClick}>
        <BoardTitle>{this.props.board.title}</BoardTitle>
      </BoardThumbnail>
    );
  }
}

export default withRouter(BoardIndexItem);
