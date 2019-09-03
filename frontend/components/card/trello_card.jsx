import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import TrelloForm from "../trello_form";
import { editCard, deleteCard } from "../../actions/cards_actions";
import { connect } from "react-redux";
import TrelloButton from "../trello_button";
import ShowCardFormContainer from "./show_card_form_container";
import { setActiveCard } from "../../actions/cards_actions";

const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`;

const EditButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const DeleteButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  bottom: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const TrelloCard = React.memo(
  ({ title, id, listID, index, showCardForm, dispatch }) => {
    const handleClick = id => {
      // console.log(id);
      // setActiveCardID(id);
      // console.log(cardID);
      dispatch(setActiveCard(id));
      showCardForm();
    };

    const handleDeleteCard = (id, listID) => {
      dispatch(deleteCard(id, listID));
    };

    const renderCard = () => {
      return (
        <Draggable draggableId={String(id)} index={index}>
          {provided => (
            <CardContainer
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <Card>
                <EditButton onClick={() => showCardForm()} fontSize="small">
                  edit
                </EditButton>
                <DeleteButton
                  fontSize="small"
                  onClick={() => handleDeleteCard(id, listID)}
                >
                  delete
                </DeleteButton>

                <CardContent onClick={() => handleClick(id)}>
                  <Typography>{title}</Typography>
                </CardContent>
              </Card>
            </CardContainer>
          )}
        </Draggable>
      );
    };

    return renderCard();
  }
);

export default connect()(TrelloCard);
