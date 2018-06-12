import { RECEIVE_CURRENT_USER } from '../actions/session_action';
import { merge } from 'lodash'

const _nullSession = {
  currentUser: null
};

const sessionReducer = (state = _nullSession, action) => {
	Object.freeze(state)
	let currentUser = action.currentUser
	switch(action.type){
		case RECEIVE_CURRENT_USER:
			return merge({}, {currentUser})
		default:
			return state
	}

}

export default sessionReducer