import React from 'react'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<nav className="address-index-navbar">
				<button onClick={this.props.logout}>Logout</button>
				<Link to={'/addresses/new'}>Add Address</Link>
			</nav>
		)
	}
}

export default Navbar