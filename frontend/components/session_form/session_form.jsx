import React from 'react'

class SessionForm extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		console.log(this.props)
		return(
			<div>
				<p>{this.props.formType}</p>
				<h1>This is a form</h1>
			</div>
		)
	}

}

export default SessionForm