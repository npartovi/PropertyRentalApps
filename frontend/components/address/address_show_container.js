import { connect } from 'react-redux';
import AddressShow from './address_show';
import { fetchAddress, deleteAddress } from '../../actions/address_action';
import React from 'react'
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    address: state.address[ownProps.match.params.id]
})

const mapDispatchToProps = (dispatch) => ({
    fetchAddress: (id) => dispatch(fetchAddress(id)),
    deleteAddress: (addressId) => dispatch(deleteAddress(addressId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddressShow);