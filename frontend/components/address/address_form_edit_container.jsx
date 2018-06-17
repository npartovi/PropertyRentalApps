import React from 'react';
import { connect } from 'react-redux';
import AddressForm from './address_form';

import { updateAddress, fetchAddress } from '../../actions/address_action';

const mapStateToProps = (state, ownProps) => {
    const defaultAddress = {street: "", city: "", state: "", zip_code: "", suite: "", tenant_first_name: "", tenant_last_name: "" };
    const address = state.address[ownProps.match.params.id] || defaultAddress;

    return { address }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchAddress: (id) => dispatch(fetchAddress(id)),
        action: (address) => dispatch(updateAddress(address))
    }
};

class EditPostForm extends React.Component {
    
    componentDidMount(){
        this.props.fetchAddress(this.props.match.params.id)
    }

    render(){
        return (
            <AddressForm 
                action={this.props.action}
                address={this.props.address}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm)