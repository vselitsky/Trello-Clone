import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CreateNewBoardContainer from "./create_new_board_container";
import NavBarContainer from "../nav_bar/nav_bar_container";
import BoardIndexItem from "./board_index_item";

const HomeWrapper = styled.div`
  display: flex;
  align-items: flex-center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  // min-height: calc(100vh - 40px);
`;

const AllBoards = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 40px;
  margin-left: 200px;
  margin-right: 200px;
  flex: 1 1 100%;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;

  // width: 0;
  // flex: 1 1 100%;
  // min-width: 352px;
  // display: flex;
  // padding-left: 20px;
  // padding-right: 20px;
  // margin-top: 40px;
  // flex-direction: row;
  // flex-wrap: wrap;
  // overflow-y: auto;
  // outline: none;
  // flex-grow: 1;
  // margin: 0 auto;
  // max-width: 1250px;
  // padding: 0 0 20px;
`;

class BoardsIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  componentDidMount() {
    this.props.fetchAllBoards();
    // .then(() => this.props.fetchAllLists())
    // .then(() => this.props.fetchAllCards());
  }

  renderBoards() {
    const boards = this.props.boards.slice(0, -2);
    console.log(boards);
    return boards.map(board => {
      return <BoardIndexItem board={board} key={board.id} />;
    });
  }

  // const BenchIndex = ({ benches }) => (
  //   <div>
  //     <h1>Benches: </h1>
  //     {benches.map(bench => (
  //       <BenchIndexItem
  //         bench={bench}
  //         key={bench.id}
  //       />
  //     ))}
  //   </div>
  // );

  render() {
    return (
      <HomeWrapper>
        <AllBoards>
          {this.renderBoards()}
          {this.props.createNewBoard}
        </AllBoards>
      </HomeWrapper>
    );
  }
}

export default BoardsIndex;

//   updateRecentBoards(board) {
//     if (this.state.recentBoardsIds.slice(-4).indexOf(board.id) === -1) {
//       this.setState({ recentBoards: [...this.state.recentBoards, board] });
//       this.setState({
//         recentBoardsIds: [...this.state.recentBoardsIds, board.id]
//       });
//     }
//   }

//   render() {
//     const allBoards = this.props.boards.map(board => (
//       <li className="boards-list-item">
//         <Link
//           className="board-tile"
//           key={board.id}
//           onClick={() => this.updateRecentBoards(board)}
//           to={`/boards/${board.id}`}
//         >
//           <span className="board-tile-fade" />
//           <div className="board-tile-details">
//             <div className="board-tile-details-name">{board.title}</div>
//           </div>
//         </Link>
//       </li>
//     ));
//     const recentBoards = this.state.recentBoards.slice(-4).map((board, i) => (
//       <li className="boards-list-item">
//         <Link className="board-tile" key={board.id} to={`/boards/${board.id}`}>
//           <span className="board-tile-fade" />
//           <div className="board-tile-details">
//             <div className="board-tile-details-name">{board.title}</div>
//           </div>
//         </Link>
//       </li>
//     ));
//     return (
//       <div>
//         <NavBarContainer />

//         <div id="content">
//           <div className="member-boards-view">
//             <div className="home-sticky-container">
//               <div style={{ position: "sticky", top: 0 + "px" }}>
//                 <nav className="home-left-sidebar-container" />
//               </div>
//               <div className="all-boards">
//                 <div style={{ position: "sticky", top: 0 + "px" }}>
//                   <div className="content-all_boards">
//                     <div>
//                       <div className="boards-page-board-section">
//                         <div className="recently-viewed-container">
//                           <div className="recently-viwed-icon">
//                             <span className="icon-clock">
//                               <i className="far fa-clock" />
//                             </span>
//                           </div>
//                           <h3 className="recently-viewed-title">
//                             Recently Viewed
//                           </h3>
//                         </div>
//                         <ul className="boards-page-board-section-list">
//                           {recentBoards}
//                         </ul>
//                       </div>
//                     </div>
//                     <div>
//                       <div className="boards-page-board-section">
//                         <div className="recently-viewed-container">
//                           <div className="recently-viwed-icon">
//                             <span className="icon-clock">
//                               <i className="far fa-user" />
//                             </span>
//                           </div>
//                           <h3 className="recently-viewed-title">
//                             Personal Boards
//                           </h3>
//                         </div>
//                         <ul className="boards-page-board-section-list">
//                           {allBoards}
//                           {this.props.createNewBoard}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
