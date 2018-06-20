import React from 'react';
import AddressIndexItem from './address_index_item';
import { Link } from 'react-router-dom';


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
                <div className="address-index-item-wrapper" key={idx}>
                    <AddressIndexItem
                        address={address}
                    />
                    <Link to={`addresses/${address.id}`}>show</Link>
                </div>
            )
        })
    }

    render(){
        return(
            <div className="address-index-container">
                {this.renderIndexList()}
            </div>
        )
    }
}

export default AddressIndex