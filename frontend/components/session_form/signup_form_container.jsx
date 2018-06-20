import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => ({
	formType: 'Signup',
	navLink: <Link className="session-link" to="/login">Already have an account? Go to login screen</Link>
	
});

const mapDispatchToProps = (dispatch) => ({
	
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)