import React from 'react'


class AddressForm extends React.Component {
	constructor(props){
		super(props)
		this.state = this.props.address
	}


	updateField(field){
		return (e) => {
			this.setState({[field]: e.target.value})
		}
	}

	render(){
		console.log(this.state)
		return (
			<div className="form-container">
				<form>
					<label>Street
						<input
							type="text"
							value={this.state.street}
							onChange={this.updateField("street")}
						/>
					</label>

					<label>City
						<input 
							type="text"
							value={this.state.city}
							onChange={this.updateField("city")}
						/>
					</label>

					<label>State
						<input 
						type="text"
						value={this.state.state}
						onChange={this.updateField("state")}
						/>
					</label>

					<label>Zip
						<input 
							type="text"
							value={this.state.zipcode}
							onChange={this.updateField("zipcode")}
						/>
					</label>

					<label>Suite
						<input 
							type="text"
							value={this.state.suite}
							onChange={this.updateField("suite")}
						/>
					</label>

					<label>Tenant First Name
						<input 
							type="text"
							value={this.state.tenant_first_name}
							onChange={this.updateField("tenant_first_name")}
						/>
					</label>

					<label>Tenant Last Name
						<input 
							type="text"
							value={this.state.tenant_last_name}
							onChange={this.updateField("tenant_last_name")}
						/>
					</label>

					<input type="submit" />
				</form>
			</div>
		)
	}
}

export default AddressForm