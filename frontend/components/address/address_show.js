import React from 'react';
import AddressIndexItem from './address_index_item';
import { Link } from 'react-router-dom';

class AddressShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAddress(this.props.match.params.id)
    }

    render(){
        if(!this.props.address){
            return null
        }
        return(
            <div>
                <Link to="/">Home</Link>
                <AddressIndexItem
                    address={this.props.address}
                />
            </div>
        )
    }
}

export default AddressShow