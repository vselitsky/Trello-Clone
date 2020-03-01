import { connect } from "react-redux";
import React from "react";
import { signup, clearErrors, login } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Create a Trello Account",
    navlink: <Link to="/login"> or sign in to your account </Link>
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    processDemo: user => dispatch(login(user))
  };
};

export default connect(
  msp,
  mdp
)(SessionForm);
