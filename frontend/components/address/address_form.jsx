import React from 'react'
import { Link, withRouter } from 'react-router-dom';



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
		console.log(this.state)
		return (
			<div className="address-form-container">
				<div className="new-address-header">
					<h1>Add New Address</h1>
				</div>
				<form className="address-form" onSubmit={this.handleSubmit}>
						<input
							type="text"
							value={this.state.street}
							onChange={this.updateField("street")}
							placeholder="Street"
						/>
						<input 
							type="text"
							value={this.state.city}
							onChange={this.updateField("city")}
							placeholder="City"
						/>
						<input 
							type="text"
							value={this.state.state}
							onChange={this.updateField("state")}
							placeholder="State"
						/>
						<input 
							type="text"
							value={this.state.zip_code}
							onChange={this.updateField("zip_code")}
							placeholder="Zip Code"
							
						/>
						<input 
							type="text"
							value={this.state.suite}
							onChange={this.updateField("suite")}
							placeholder="Suite"
						/>
						<input 
							type="text"
							value={this.state.tenant_first_name}
							onChange={this.updateField("tenant_first_name")}
							placeholder="Tenant First Name"
						/>
						<input 
							type="text"
							value={this.state.tenant_last_name}
							onChange={this.updateField("tenant_last_name")}
							placeholder="Tenant Last Name"
						/>
					<div className="form-buttons-container">
						<button className="address-form-submit" type="submit" >Submit</button>
						<button className="address-form-cancel"><Link to="/">Cancel</Link></button>
					</div>
				</form>
			</div>
		)
	}
}

export default withRouter(AddressForm)