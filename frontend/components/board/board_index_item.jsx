import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

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
    this.props.history.push(`/boards/${boardId}`);
  }

  render() {
    console.log(this.props.board.title);
    return (
      <BoardThumbnail onClick={this.handleClick}>
        <BoardTitle>{this.props.board.title}</BoardTitle>
      </BoardThumbnail>
    );
  }
}

export default withRouter(BoardIndexItem);
