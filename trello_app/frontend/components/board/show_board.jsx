import React, { PureComponent } from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import { connect } from "react-redux";
import { fetchBoard } from "../../actions/board_actions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import CreateListContainer from "../list/create_list_container";
import { Link } from "react-router-dom";
import TrelloList from "../list/trello_list";
import styled from "styled-components";
import TrelloCreate from "../trello_create";
import { sort } from "../../actions/lists_actions";

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId);
  }

  onDragEnd(result) {
    const { destination, source, draggableId, type } = result;
    const id = this.props.board.id;
    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type,
        id
      )
    );
  }

  render() {
    const { board } = this.props;
    if (!board) {
      return <p>Board not found</p>;
    }

    const listOrder = board.lists;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Link to="/boards">Go Back</Link>
        <h2>{board.title}</h2>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <ListsContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {listOrder.map((list, index) => {
                // const list = board.lists[listID];
                // console.log(listID);
                if (list) {
                  //   const listCards = list.cards.map(cardID => cards[cardID]);

                  return (
                    <TrelloList
                      listID={list.id}
                      key={list.id}
                      title={list.title}
                      // cards={listCards}
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
    );
  }
}

const msp = (state, ownProps) => {
  return {
    board: state.entities.boards[ownProps.match.params.boardId]
  };
};

const mdp = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id))
  // sort: (
  //   droppableIdStart,
  //   droppableIdEnd,
  //   droppableIndexStart,
  //   droppableIndexEnd,
  //   draggableId,
  //   type,
  //   id
  // ) =>
  //   dispatch(
  //     sort(
  //       droppableIdStart,
  //       droppableIdEnd,
  //       droppableIndexStart,
  //       droppableIndexEnd,
  //       draggableId,
  //       type,
  //       id
  //     )
  //   )
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
