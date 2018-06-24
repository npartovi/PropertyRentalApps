import React from 'react';

const AddressIndexItem = ({ address }) => (

        <ul className="address-index-item">
            <li>{address.tenant_first_name} {address.tenant_last_name}</li>
            <li>{address.street}</li>
            <li>{address.city},{address.state},{address.zip_code}</li>
            {address.suite ? <li>Suite: {address.suite}</li> : ""}
        </ul>

)

export default AddressIndexItem;