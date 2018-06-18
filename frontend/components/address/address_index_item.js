import React from 'react';
import { Link } from 'react-router-dom';

const AddressIndexItem = ({ state, street, city, id}) => (
    
    <ul>
        <li> {state} </li>
        <li>{street}</li>
        <li>{city}</li>
        <li>{id}</li>
        <li><Link to={`/addresses/${id}`}>show</Link></li>
    </ul>

)

export default AddressIndexItem;