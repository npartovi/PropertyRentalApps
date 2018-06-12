import React from 'react'

class Navbar extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<nav>
				<button onClick={this.props.logout}>Logout</button>
			</nav>
		)
	}
}

export default Navbar