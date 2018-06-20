import * as AddressApitUtil from '../util/address_api_util';

export const RECEIVE_ADDRESS = "RECEIVE_ADDRESS"
export const RECEIVE_ALL_ADDRESSES = "RECEIVE_ALL_ADDRESSES"
export const REMOVE_ADDRESS = "REMOVE_ADDRESS"


export const fetchAddresses = () => dispatch => (
    AddressApitUtil.fetchAddresses()
        .then(addresses => dispatch(receiveAllAddress(addresses)))
)

export const fetchAddress = (id) => dispatch => (
    AddressApitUtil.fetchAddress(id)
        .then(address => dispatch(receiveAddress(address)))
)

export const createAddress = (address) => dispatch => (
    AddressApitUtil.createAddress(address)
        .then(address => dispatch(receiveAddress(address)))
)

export const updateAddress = (address) => dispatch => (
    AddressApitUtil.updateAddress(address)
        .then(address => dispatch(receiveAddress(address)))
)

export const deleteAddress = (addressId) => dispatch => (
    AddressApitUtil.deleteAddress(addressId)
        .then(address => dispatch(removeAddress(address.id)))
)

const receiveAllAddress = (addresses) => ({
    type: RECEIVE_ALL_ADDRESSES,
    addresses
})

const receiveAddress = (address) => ({
    type: RECEIVE_ADDRESS,
    address
})

const removeAddress = (addressId) => ({
    type: REMOVE_ADDRESS,
    addressId
})
