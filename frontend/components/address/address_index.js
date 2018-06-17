import React from 'react';


class AddressIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAddresses();
    }

    renderIndexList(){
        å
    }

    render(){
        return(
            <h1>This is the index listings</h1>
        )
    }
}

export default AddressIndex