import React from 'react';
import { connect } from 'react-redux';
import AddressForm from './address_form';

const mapStateToProps = (state, ownProps) => ({
    address: {street: "", city: "", state: "", zipcode: "", suite: "", tenant_first_name: "", tenant_last_name: "" }

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, null)(AddressForm)


