import React from 'react';
import {Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_api_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Main from './main/main';


import AddressFormNewContainer from './address/address_form_new_container';
import AddressFormEditContainer from './address/address_form_edit_container';
import AddressShowContainer from './address/address_show_container';

const App = () => (

	<div>
		<Switch>
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/signup" component={SignupFormContainer} />
			<ProtectedRoute path="/addresses/:id/edit" component={AddressFormEditContainer} />
			<ProtectedRoute path="/addresses/:id" component={AddressShowContainer}/>
			<ProtectedRoute path="/addresses/new" component={AddressFormNewContainer} />
			<ProtectedRoute path="/" component={Main} />			
		</Switch>
	</div>

);


export default App;
