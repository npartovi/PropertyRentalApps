import React from 'react';

const AddressIndexItem = ({ address}) => (

    <ul>
        <li>{address.state}</li>
        <li>{address.street}</li>
        <li>{address.city}</li>
        <li>{address.zipcode}</li>
        <li>{address.suite}</li>
        <li>{address.tenant_first_name}</li>
        <li>{address.tenant_last_name}</li>
    </ul>

)

export default AddressIndexItem;