import React from 'react';

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
                
            </div>
        )
    }

}

export default AddressShow