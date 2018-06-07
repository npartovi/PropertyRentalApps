import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => ({
	formType: 'Signup',
	navLink: <Link to="/login">Login</Link>
	
});

const mapDispatchToProps = (dispatch) => ({
	
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)