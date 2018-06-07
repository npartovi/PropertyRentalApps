import React from 'react'
import { withRouter } from 'react-router-dom'

class SessionForm extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			username: "",
			password: "",
			email: "",

		}

		this.handleSubmit = this.handleSubmit.bind(this)

	}

	handleSubmit(e){
		e.preventDefault()
		this.props.login(this.state)
	}

	renderSignupInput(){
		if (this.props.formType === "Signup" ){ 
			return (
				<label>Email: 
					<input type="text"
						onChange={this.updateField('email')} 
					/> 
				</label>
			)
		}
	}

	updateField(field){
		return ((e) => this.setState({[field]: e.target.value}))
	}

	render(){

		console.log(this.state)
		return(
			<div>
				<p>{this.props.formType}</p>
				<h1>This is a form</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderSignupInput()}
					<label>Username
						<input type="text" 
							onChange={this.updateField('username')}
						/>
					</label>


					<label>Password
						<input type="text" 
							onChange={this.updateField('password')}/>
					</label>

					<button type="submit">{this.props.formType}</button>
				</form>
			</div>
		)
	}

}

export default withRouter(SessionForm)