import React from 'react';
import AddressIndexItem from './address_index_item';

class AddressShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAddress(this.props.match.params.id)
    }

    render(){
        console.log(this.props.address)
        return(
            <div>
                <AddressIndexItem
                    address={this.props.address}
                />
            </div>
        )
    }

}

export default AddressShow