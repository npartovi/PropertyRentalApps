import { RECEIVE_ADDRESS, RECEIVE_ALL_ADDRESSES, REMOVE_ADDRESS } from '../actions/address_action';
import { merge } from 'lodash';

const addressReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type){
        case RECEIVE_ALL_ADDRESSES:
            return merge({}, action.addresses)
        case RECEIVE_ADDRESS:
            return merge({}, oldState, {[action.address.id]: action.address})
        case REMOVE_ADDRESS:
            debugger
            let newState = merge({}, oldState)
            delete newState[action.addressId]
            return newState
        default:
            return oldState
    }
}

export default addressReducer
