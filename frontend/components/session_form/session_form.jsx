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
					<input type="text"
						onChange={this.updateField('email')}
						placeholder="Email address" 
					/> 
			)
		}
	}

	updateField(field){
		return ((e) => this.setState({[field]: e.target.value}))
	}

	render(){
		return(
				<div className="session-form-container">
					<div className="session-form-wrapper">
							<form className="session-form" onSubmit={this.handleSubmit}>
								{this.renderSignupInput()}
								<input type="text" 
									onChange={this.updateField('username')}
									placeholder="Username"
								/>
								<input type="password" 
									onChange={this.updateField('password')}
									placeholder="Password"
									/>
							<button className="session-button" type="submit">{this.props.formType}</button>
							</form>
					</div>
					<div className="session-link-container">
						{this.props.navLink}
					</div>
				</div>
		)
	}
}

export default withRouter(SessionForm)