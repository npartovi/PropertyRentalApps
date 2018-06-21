import React from 'react'
import { Link } from 'react-router-dom';


class AddressForm extends React.Component {
	constructor(props){
		super(props)
		this.state = this.props.address
		this.handleSubmit = this.handleSubmit.bind(this)
	}


	updateField(field){
		return (e) => {
			this.setState({[field]: e.target.value})
		}
	}

	handleSubmit(e){
		e.preventDefault()
		this.props.action(this.state).then(this.props.history.push('/'));
	}

	render(){
		return (
			<div className="address-form-container">
				<form className="address-form" onSubmit={this.handleSubmit}>
						<input
							type="text"
							value={this.state.street}
							onChange={this.updateField("street")}
							value="Street"
						/>
						<input 
							type="text"
							value={this.state.city}
							onChange={this.updateField("city")}
							value="City"
						/>
						<input 
						type="text"
						value={this.state.state}
						onChange={this.updateField("state")}
						value="State"
						/>
						<input 
							type="text"
							value={this.state.zipcode}
							onChange={this.updateField("zip_code")}
							value="Zipcode"
						/>
						<input 
							type="text"
							value={this.state.suite}
							onChange={this.updateField("suite")}
							value="Suite"
						/>
						<input 
							type="text"
							value={this.state.tenant_first_name}
							onChange={this.updateField("tenant_first_name")}
							value="Tenant First Name"
						/>
						<input 
							type="text"
							value={this.state.tenant_last_name}
							onChange={this.updateField("tenant_last_name")}
							value="Tenant Last Name"
						/>
					<div className="form-buttons-container">
						<input className="address-form-submit" type="submit" />
						<Link className="address-form-cancel" to="/">Cancel</Link>
					</div>
				</form>
			</div>
		)
	}
}

export default AddressForm