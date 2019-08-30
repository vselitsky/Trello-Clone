import React, { useState } from "react";
import TrelloCard from "../card/trello_card.jsx";
import TrelloCreate from "../trello_create";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { connect } from "react-redux";
import CreateListContainer from "./create_list_container";
import { editList } from "../../actions/lists_actions";
import Icon from "@material-ui/core/Icon";
import { openModal } from "../../actions/modal_actions";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline-color: blue;
  border-radius: 3px;
  margin-bottom: 3px;
  padding: 5px;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const DeleteButton = styled(Icon)`
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  opacity: 0.4;
  &:hover {
    opacity: 0.8;
  }
`;

const ListTitle = styled.h4`
  transition: background 0.3s ease-in;
  ${TitleContainer}:hover & {
    background: #ccc;
  }
`;

const TrelloList = ({
  title,
  cardPositions,
  allCards,
  listID,
  index,
  cards,
  showCardForm,
  editList,
  dispatch
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setListTitle] = useState(title);
  console.log(showCardForm);

  const renderEditInput = () => {
    return (
      <form onSubmit={handleFinishEditing}>
        <StyledInput
          type="text"
          value={listTitle}
          onChange={handleChange}
          autoFocus
          onFocus={handleFocus}
          onBlur={handleFinishEditing}
        />
      </form>
    );
  };

  const handleFocus = e => {
    e.target.select();
  };

  const handleChange = e => {
    e.preventDefault();
    setListTitle(e.target.value);
  };

  const handleFinishEditing = e => {
    e.preventDefault();
    setIsEditing(false);
    const newList = Object.assign(
      {},
      {
        title: listTitle,
        id: listID
      }
    );
    console.log(newList);
    editList(newList);
  };

  const handleDeleteList = () => {
    dispatch(deleteList(listID));
  };

  console.log(allCards);

  const cards2 = cardPositions.map(pos => {
    return allCards[pos];
  });

  console.log(cards2);

  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <ListContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(listID)} type="card">
            {provided => (
              <div>
                <div>
                  {isEditing ? (
                    renderEditInput()
                  ) : (
                    <TitleContainer onClick={() => setIsEditing(true)}>
                      <ListTitle>{listTitle}</ListTitle>
                      <DeleteButton onClick={handleDeleteList}>
                        delete
                      </DeleteButton>
                    </TitleContainer>
                  )}
                </div>
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {cards.map((card, index) => (
                    <TrelloCard
                      key={card.id}
                      title={card.title}
                      id={card.id}
                      index={index}
                      listID={listID}
                      showCardForm={showCardForm}
                    />
                  ))}
                  {provided.placeholder}
                  <TrelloCreate listID={listID} />
                </div>
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  );
};

const msp = state => {
  return {
    allCards: state.entities.cards
  };
};

const mdp = dispatch => ({
  showCardForm: () => dispatch(openModal("show card form")),
  editList: list => dispatch(editList(list))
});

export default connect(
  msp,
  mdp
)(TrelloList);

{
  /* <Droppable droppableId={String(listID)} type="card">
            {provided => (
              <div>
                <div>
                  {isEditing ? (
                    renderEditInput()
                  ) : (
                    <TitleContainer onClick={() => setIsEditing(true)}>
                      <ListTitle>{listTitle}</ListTitle>
                      <DeleteButton onClick={handleDeleteList}>
                        delete
                      </DeleteButton>
                    </TitleContainer>
                  )}
                </div>
                {/* <div {...provided.droppableProps} ref={provided.innerRef}>
                  {cards.map((card, index) => (
                    <TrelloCard
                      key={card.id}
                      text={card.text}
                      id={card.id}
                      index={index}
                      listID={listID}
                    />
                  ))} */
}
//    </Droppable > * /}

// change_column_null :table_name, :column_name, false
