import React from 'react';

const AddressIndexItem = ({ address }) => (

    <ul className="address-index-item">
        <li>State: {address.state}</li>
        <li>Street: {address.street}</li>
        <li>City: {address.city}</li>
        <li>Zipcode: {address.zipcode}</li>
        <li>Suite: {address.suite}</li>
        <li>First Name: {address.tenant_first_name}</li>
        <li>Last Name: {address.tenant_last_name}</li>
    </ul>

)

export default AddressIndexItem;