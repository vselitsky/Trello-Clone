import React, { PureComponent } from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import { connect } from "react-redux";
import {
  fetchBoard,
  setActiveBoard,
  updateBoard
} from "../../actions/board_actions";
import { fetchAllLists } from "../../actions/lists_actions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import CreateListContainer from "../list/create_list_container";
import { Link } from "react-router-dom";
import TrelloList from "../list/trello_list";
import styled from "styled-components";
import TrelloCreate from "../trello_create";
import { sort } from "../../actions/lists_actions";
import { Tgch } from "styled-icons/crypto";

const Content = styled.div`
  flex-grow: 1;
  position: relative;
  overflow-y: auto;
  outline: none;
  height: 100%;

  // height: 700px;
  background: #2d90cb;
  z-index: 2;
`;

const PageWrapper = styled.div`
  height: 100%;
  position: absolute;
  // overflow-y: auto;
  width: 100%;
  z-index: 0;
  // background: #2d90cb;
  overflow: hidden;
`;

const BoardWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 20px;
  top: 60px;
  bottom: 0;
`;

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50px;
`;

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 0;
  position: relative;
  transition: margin 0.1s ease-in;
  margin-bottom: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
  margin-left: 10px;
`;

const BoardHeader = styled.div`
  height: auto;
  position: relative;
  background: transparent;
  padding: 8px 4px 4px 8px;
  // bottom: 10px;
  // transition: padding 0.1s ease -in 0s;
`;

const BoardTitle = styled.h2`
  background: transparent;
  cursor: default;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  padding: 0;
  text-decoration: none;
  max-width: calc(100% - 24px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 3px;
  color: #fff;
  position: relative;
`;

class BoardShow extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   title: this.props.board.title,
    //   list_positions: this.props.board.list_positions,
    //   id: this.props.board.id
    // };
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId);
    // .then(() => this.props.setActiveBoard(this.props.match.params.boardId));

    // this.props.fetchAllLists(this.props.match.params.boardId);
  }

  // componentWillUnmount() {
  //   const board = this.props.board;
  //   console.log(board);

  //   this.props.updateBoard(board);
  // }

  // componentDidUpdate(prevProps) {
  //   if (
  //     prevProps.board &&
  //     prevProps.board.id != this.props.match.params.boardId
  //   ) {
  //     this.props.fetchBoard(this.props.match.params.boardId);
  //   }
  // }

  onDragEnd(result) {
    const { destination, source, draggableId, type } = result;
    const boardID = this.props.match.params.boardId;
    console.log(boardID);
    if (!destination) {
      return;
    }

    this.props.sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type,
      boardID
    );
  }

  getCards(list) {
    let allCards = this.props.cards;
    let cards = list.card_positions.map(position => {
      allCards[position];
    });

    return cards;
  }

  //   compare(a, b) {
  //   // Use toUpperCase() to ignore character casing
  //   const idA = a.id
  //   const idB = b.id

  //   let comparison = 0;
  //   if (idA & gt; idB) {
  //     comparison = 1;
  //   } else if (idB & lt; idA) {
  //     comparison = -1;
  //   }
  //   return comparison;
  // }

  render() {
    const { board } = this.props;
    if (!board) {
      return <p>Board not found</p>;
    }

    // const sortedLists = board.lists.sort((a, b) =>
    //   a.position > b.position ? 1 : -1
    // );

    const listOrder = board.list_positions;
    //console.log(sortedLists);
    console.log(listOrder);
    console.log(this.props.board);
    console.log(this.props);
    const allCards = this.props.cards;
    return (
      <PageWrapper>
        <Content>
          <NavBarContainer />
          <BoardWrapper>
            <StyledWrapper>
              <DragDropContext onDragEnd={this.onDragEnd.bind(this)}>
                <BoardHeader>
                  {/* <Link to="/boards">Go Back</Link> */}
                  <h2 className="listTitle">{board.title}</h2>
                </BoardHeader>
                <Droppable
                  droppableId="all-lists"
                  direction="horizontal"
                  type="list"
                >
                  {provided => (
                    <ListsContainer
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {listOrder.map((listID, index) => {
                        const list = this.props.lists[listID];
                        if (list) {
                          console.log(list);
                          const cards = list.card_positions.map(pos => {
                            return this.props.cards[pos];
                          });
                          console.log(cards);
                          return (
                            <TrelloList
                              listID={list.id}
                              key={list.id}
                              title={list.title}
                              cardPositions={list.card_positions}
                              //allCards={allCards}
                              cards={cards}
                              index={index}
                            />
                          );
                        }
                      })}
                      {provided.placeholder}

                      <TrelloCreate list />
                    </ListsContainer>
                  )}
                </Droppable>
              </DragDropContext>
            </StyledWrapper>
          </BoardWrapper>
        </Content>
      </PageWrapper>
    );
  }
}

const msp = (state, ownProps) => {
  return {
    board: state.entities.boards[ownProps.match.params.boardId],
    lists: state.entities.lists,
    cards: state.entities.cards
  };
};

const mdp = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
  updateBoard: board => dispatch(updateBoard(board)),
  fetchAllLists: id => dispatch(fetchAllLists(id)),
  setActiveBoard: id => dispatch(setActiveBoard(id)),
  sort: (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type,
    boardID
  ) =>
    dispatch(
      sort(
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
        boardID
      )
    )
});

export default connect(
  msp,
  mdp
)(BoardShow);

{
  /* <div>
            <NavBarContainer />
          </div> */
}
{
  /* <div className="content-board">
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
          </div> */
}
