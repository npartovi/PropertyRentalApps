import React from 'react';

class Main extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		console.log(this.props.test)
		return (
			<main className="main">
				<h1>This is a page?</h1>
				<button onClick={this.props.logout}>Logout</button>
			</main>
		)
	}
}

export default Main