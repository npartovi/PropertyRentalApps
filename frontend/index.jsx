import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {

	window.login = login
	window.signup = signup
	window.logout = logout

	let store;

	if (window.currentUser) {
	  const preloadedState = { sessions: { currentUser: window.currentUser } };
	  store = configureStore(preloadedState);
	  delete window.currentUser;
	} else {
	  store = configureStore();
	}


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});