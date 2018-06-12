import React from 'react'
import { connect } from 'react-redux';
import Main from './main'
import { logout } from '../../actions/session_action';

const mapStateToProps = (state) => ({
	test: "this is a test"

});

const mapDispatchtoProps = (dispatch) => ({
	logout: ()=> dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchtoProps)(Main);