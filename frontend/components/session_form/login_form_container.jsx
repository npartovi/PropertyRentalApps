import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_action';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
	formType: 'Login',
	navLink: <Link className="session-link" to="/signup">Dont have an account? Get Started</Link>

});

const mapDispatchToProps = (dispatch) => ({
	login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
