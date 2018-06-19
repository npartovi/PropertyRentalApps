import React from 'react';
import AddressIndexItem from './address_index_item';
import { Link, withRouter } from 'react-router-dom';

class AddressShow extends React.Component {
    constructor(props){
        super(props)
        this.handleDeleteAddress = this.handleDeleteAddress.bind(this)
    }

    componentDidMount(){
        this.props.fetchAddress(this.props.match.params.id)
    }

    handleDeleteAddress(){
        this.props.deleteAddress(this.props.address.id)
            .then(() => this.props.history.push('/'));
    }

    render(){
        if(!this.props.address){
            return null
        }
        return(
            <div>
                <Link to="/">Home</Link>
                <Link to={`addresses/${this.props.address.id}/edit`}>edit</Link>
                <button onClick={this.handleDeleteAddress}>Delete</button>
                <AddressIndexItem
                    address={this.props.address}
                />
            </div>
        )
    }
}

export default withRouter(AddressShow)