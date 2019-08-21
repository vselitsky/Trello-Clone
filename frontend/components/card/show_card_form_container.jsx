import { connect } from "react-redux";
import React, { useState } from "react";
import styled from "styled-components";
import Textarea from "react-textarea-autosize";
import { editCard } from "../../actions/cards_actions";
import CardDescriptionForm from "./card_description_form";
const ModalWrapper = styled.div`
  display: flex;
  margin: 36px 8px;
  height: 600px;
  color: #172b4d;
  background-color: #f4f5f7;
  border-radius: 2px;
  justify-content: start;
  //   //   position: relative;
  //   width: 600px;
  //   z-index: 20;
  box-sizing: border-box;
  //   // justify-content: center;
`;

const HeaderContainer = styled.div`
  margin: 12px 40px 8px 56px;
  min-height: 32px;
  position: relative;
  z-index: 1;
  justify-content: start;
`;

const CardTitle = styled.h2`
  position: relative;
  margin-right: 4px;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
  font-family: Helvetica Neue, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

const ListReference = styled.div`
  display: inline-block;
  margin: 4px 8px 4px 2px;
  color: #6b778c;
  position: relative;
`;

const FakeFocus = styled.a``;

const TitleContainer = styled.div`
  //   width: 100%;
  //   height: 100%;
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   cursor: pointer;

  position: relative;

  // margin: 12px 40px 8px 56px;
  min-height: 32px;
  padding: 8px 0 0 8px;
  //   //cursor: pointer;

  margin: 4px 0 0;
  //   padding: 8px 0 0;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline-color: blue;
  border-radius: 3px;
  //   margin-bottom: 3px;
  // padding: 5px;
  background: #fff;
  //   border-radius: 3px;
  box-shadow: none;
  font-size: 20px;
  font-weight: 600;

  line-height: 24px;
  margin: -4px -8px;
  min-height: 24px;
  padding: 4px 8px;
  resize: none;
  box-shadow: inset 0 0 0 2px #dfe1e6;
`;

class ShowCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: this.props.card.title, isEditing: false };
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
    this.setState({ title: e.currentTarget.value });
  }

  handleFinishEditing(e) {
    e.preventDefault();
    const newCard = Object.assign(
      {},
      {
        title: this.state.title,
        id: this.props.card.id
      }
    );
    this.props.editCard(newCard).then(this.setState({ isEditing: false }));
    //   .then((this.props.title = this.state.title));
  }

  renderEditInput() {
    let styles = {
      overflow: "hidden",
      overflowWrap: "break-word",
      height: "32px"
    };
    return (
      <form onSubmit={this.handleFinishEditing}>
        <StyledInput
          style={styles}
          dir="auto"
          type="text"
          value={this.state.title}
          onChange={this.handleChange.bind(this)}
          autoFocus
          onFocus={this.handleFocus}
          onBlur={this.handleCloseForm.bind(this)}
          onKeyDown={e => {
            if (e.charCode == 13) {
              this.handleFinishEditing;
            }
          }}
        />
      </form>
    );
  }

  render() {
    console.log(this.props);
    const { title } = this.props.card;
    const list = this.props.lists[`list-${this.props.card.list_id}`];
    const { isEditing } = this.state;

    return (
      <ModalWrapper>
        <HeaderContainer>
          {isEditing ? (
            this.renderEditInput()
          ) : (
            <TitleContainer onClick={() => this.setState({ isEditing: true })}>
              {" "}
              <CardTitle>{title}</CardTitle>
            </TitleContainer>
          )}
          <ListReference>{`in list ${list.title}`}</ListReference>

          <CardDescriptionForm
            card={this.props.card}
            editCard={this.props.editCard}
          />
        </HeaderContainer>
      </ModalWrapper>
    );
  }
}

const msp = state => {
  let revised = state.activeCard;
  //console.log(revised);
  let card = state.entities.cards[revised];
  let lists = state.entities.lists;
  return { card, lists };
};

const mdp = dispatch => ({
  editCard: card => dispatch(editCard(card))
});

export default connect(
  msp,
  mdp
)(ShowCardForm);

// console.log(this.props);
// const { title } = this.props;
// if (this.state.isEditing === false) {
//     return (
//         <div>
//             <ModalWrapper>
//                 <HeaderContainer>
//                     <TitleContainer>
//                         <CardTitle onClick={() => this.setState({ isEditing: true })}>
//                             {title}
//                         </CardTitle>
//                     </TitleContainer>
//                     <ListReference>{`list ${this.props.list_id}`}</ListReference>
//                 </HeaderContainer>
//             </ModalWrapper>
//         </div>
//     );
// } else {
//     return (
//         <ModalWrapper>
//             <HeaderContainer>
//                 <TitleContainer>{this.renderEditInput()}</TitleContainer>
//             </HeaderContainer>
//         </ModalWrapper>
//     );
// }
//   }
