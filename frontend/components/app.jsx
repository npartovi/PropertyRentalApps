import React from 'react';
import {Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_api_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import MainContainer from './main/main';

const App = () => (

	<div>
		<Switch>
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/signup" component={SignupFormContainer} />
			<ProtectedRoute path="/" component={MainContainer} />			
		</Switch>
	</div>

)


export default App
