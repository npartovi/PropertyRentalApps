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
		return(
			<div className="session-form-container">
				<p>{this.props.formType}</p>
				<form className="session-form" onSubmit={this.handleSubmit}>
					{this.renderSignupInput()}
					<label>Username
						<input type="text" 
							onChange={this.updateField('username')}
						/>
					</label>


					<label>Password
						<input type="password" 
							onChange={this.updateField('password')}/>
					</label>

					<button type="submit">{this.props.formType}</button>
				</form>
			</div>
		)
	}

}

export default withRouter(SessionForm)