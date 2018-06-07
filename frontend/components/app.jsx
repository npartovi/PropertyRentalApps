import React from 'react';
import {Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_api_util';
import NavbarContainer from './navbar/navbarcontainer';

const App = () => (

	<div>
		<header>
			<NavbarContainer />
		</header>

		<Switch>
			
		</Switch>



	</div>

)


export default App
