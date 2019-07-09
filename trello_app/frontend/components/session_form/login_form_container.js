import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';


const msp = ({errors}) => {
    return {
       errors: errors.session,
       formType: 'Log in to Trello',
       navlink: <Link to="/signup"> or create an account </Link> 
    };
}

const mdp = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => (dispatch(clearErrors()))
    };
}

export default connect (msp, mdp)(SessionForm);