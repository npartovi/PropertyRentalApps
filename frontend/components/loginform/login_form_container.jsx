import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_action';
import LoginForm from './login_form';

const mapStateToProps = (state) => ({
	currentUser: state.sessions.currentUser

});

const mapDispatchToProps = (dispatch) => ({
	login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
