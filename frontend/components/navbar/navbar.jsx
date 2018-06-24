import React from 'react'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<nav className="address-index-navbar">
				<div className="add-address-container">
					<Link to={'/addresses/new'}>Add Address</Link>
				</div>
				<div className="button-logout-container">
					<button className="logout-button" onClick={this.props.logout}>Logout</button>
				</div>
			</nav>
		)
	}
}

export default Navbar