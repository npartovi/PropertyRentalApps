import React from 'react';
import {Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_api_util';
import LoginFormContainer from './loginform/login_form_container';

const App = () => (

	<div>
		<Switch>
			<AuthRoute path="/login" component={LoginFormContainer} />
		</Switch>
	</div>

)


export default App
