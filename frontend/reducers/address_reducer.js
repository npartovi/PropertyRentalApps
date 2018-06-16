import { RECEIVE_ADDRESS, RECEIVE_ALL_ADDRESSES, REMOVE_ADDRESS } from '../actions/address_action'

const AddressReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type){
        default:
            return oldState
    }
}

export default AddressReducer
