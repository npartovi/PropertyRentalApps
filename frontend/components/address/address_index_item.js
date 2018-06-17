import React from 'react'

const AddressIndexItem = ({ state, street, city}) => (
    
    <ul>
        <li> {state} </li>
        <li>{street}</li>
        <li>{city}</li>
    </ul>

)

export default AddressIndexItem;