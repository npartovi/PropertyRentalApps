import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_action';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
	formType: 'Login',
	navLink: <Link to="/signup">Sign Up</Link>

});

const mapDispatchToProps = (dispatch) => ({
	login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
