import React, { PureComponent } from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import { connect } from "react-redux";
import { fetchBoard, setActiveBoard } from "../../actions/board_actions";
import { fetchAllLists } from "../../actions/lists_actions";
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
    this.props
      .fetchBoard(this.props.match.params.boardId)
      .then(() => this.props.setActiveBoard(this.props.match.params.boardId))
      .then(() =>
        this.props.fetchAllLists({ board_id: this.props.match.params.boardId })
      );
  }

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
    if (!destination) {
      return;
    }

    this.props.sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    );
  }

  render() {
    const { board } = this.props;
    if (!board) {
      return <p>Board not found</p>;
    }

    const listOrder = board.lists;
    return (
      <div>
        <NavBarContainer />
        <DragDropContext onDragEnd={this.onDragEnd.bind(this)}>
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
                    const listCards = list.cards;

                    return (
                      <TrelloList
                        listID={list.id}
                        key={list.id}
                        title={list.title}
                        cards={listCards}
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
      </div>
    );
  }
}

const msp = (state, ownProps) => {
  return {
    board: state.entities.boards[ownProps.match.params.boardId],
    lists: state.entities.lists
  };
};

const mdp = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
  fetchAllLists: id => dispatch(fetchAllLists(id)),
  setActiveBoard: id => dispatch(setActiveBoard(id)),
  sort: (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
  ) =>
    dispatch(
      sort(
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type
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
