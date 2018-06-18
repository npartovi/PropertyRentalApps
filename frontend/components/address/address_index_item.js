import React from 'react';
import { Link } from 'react-router-dom';

const AddressIndexItem = ({ address}) => (
    
    <ul>
        <li> {address.state} </li>
        <li>{address.street}</li>
        <li>{address.city}</li>
        <li>{address.zipcode}</li>
        <li>{address.suite}</li>
        <li>{address.tenant_first_name}</li>
        <li>{address.tenant_last_name}</li>
        <li>{address.id}</li>
        <li><Link to={`/addresses/${address.id}`}>show</Link></li>
    </ul>

)

export default AddressIndexItem;