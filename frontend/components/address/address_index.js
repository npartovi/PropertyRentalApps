import React from 'react';
import AddressIndexItem from './address_index_item';


class AddressIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAddresses();
    }

    renderIndexList(){
        return this.props.addresses.map((address, idx) => {
            return (
                <AddressIndexItem
                    state={address.state}
                    street={address.street}
                    city={address.city}
                    id={address.id}
                    key={idx}
                />
            )
        })
    }

    render(){
        return(
            <div>
                <h1>This is the index listings</h1>
                {this.renderIndexList()}
            </div>
        )
    }
}

export default AddressIndex