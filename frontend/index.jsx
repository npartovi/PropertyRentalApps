import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './util/session_api_util';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {

	window.login = login
	window.signup = signup
	window.logout = logout

	let store;

	if(window.currentUser){
		
	}


  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to rental property</h1>, root);
});