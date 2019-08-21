import React, { useState } from "react";
import styled from "styled-components";
import Textarea from "react-textarea-autosize";
import { editCard } from "../../actions/cards_actions";
import TrelloButton from "../trello_button";

const StyledTextArea = styled(Textarea)`
  resize: none;
  width: 100%;
  overflow: hidden;
  outline: none;
  border: none;
`;

const FormWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
  clear: both;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 32px;
`;

const HeaderTitle = styled.h3`
  display: inline-block;
  width: auto;
  margin: 0;
  min-height: 18px;
  min-width: 40px;
`;

const CardDescription = styled.div`
  background-color: rgba(9, 30, 66, 0.04);
  box-shadow: none;
  border: none;
  border-radius: 3px;
  display: block;
  min-height: 40px;
  padding: 8px 12px;
  text-decoration: none;
`;
const BorderFormContainer = styled.div`
  background-color: rgba(9, 30, 66, 0.04);
  box-shadow: none;
  border: none;
  border-radius: 3px;
  display: block;
  min-height: 40px;
  padding: 8px 12px;
  text-decoration: none;
`;

const TextContainer = styled.h4`
  display: inline-block;
  width: auto;
  margin: 0;
  min-height: 18px;
  min-width: 40px;
`;

class CardDescriptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: this.props.card.description, isEditing: false };
    this.handleFinishEditing = this.handleFinishEditing.bind(this);
  }

  handleCloseForm(e) {
    // e.preventDefault();
    this.setState({ isEditing: false });
  }

  handleFocus(e) {
    e.target.select();
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ description: e.currentTarget.value });
  }

  handleFinishEditing(e) {
    e.preventDefault();
    const newCard = Object.assign(
      {},
      {
        body: this.state.description,
        id: this.props.card.id
      }
    );
    this.props.editCard(newCard).then(this.setState({ isEditing: false }));
    //   .then((this.props.title = this.state.title));
  }

  renderEditInput() {
    const placeholder = "Add more detailed description";
    const text = this.state.description;

    return (
      <div>
        <StyledTextArea
          placeholder={placeholder}
          autoFocus
          value={text}
          onChange={this.handleChange.bind(this)}
          onBlur={this.handleCloseForm.bind(this)}
        />
        <TrelloButton onClick={this.handleFinishEditing.bind(this)}>
          Save
        </TrelloButton>
      </div>
    );
  }

  render() {
    const description = this.props.card.body;
    const { isEditing } = this.state;

    if (description) {
      return (
        <FormWrapper>
          <HeaderContainer>
            <HeaderTitle>Description</HeaderTitle>
          </HeaderContainer>
          {isEditing ? (
            this.renderEditInput()
          ) : (
            <CardDescription onClick={() => this.setState({ isEditing: true })}>
              {description}
            </CardDescription>
          )}
        </FormWrapper>
      );
    } else {
      return (
        <FormWrapper>
          <HeaderContainer>
            <HeaderTitle>Description</HeaderTitle>
          </HeaderContainer>
          {isEditing ? (
            this.renderEditInput()
          ) : (
            <BorderFormContainer
              onClick={() => this.setState({ isEditing: true })}
            >
              <TextContainer>Add a more detailed description</TextContainer>
            </BorderFormContainer>
          )}
        </FormWrapper>
      );
    }
  }
}

export default CardDescriptionForm;
