import React from 'react';

const AddressIndexItem = ({ address }) => (

        <ul className="address-index-item">
            <li>{address.tenant_first_name} {address.tenant_last_name}</li>
            <li>{address.street} {address.suite ? address.suite : ""}</li>
            <li>{address.city}, {address.state}, {address.zip_code}</li>
            
        </ul>

)

export default AddressIndexItem;