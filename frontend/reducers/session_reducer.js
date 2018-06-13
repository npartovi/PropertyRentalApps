import { RECEIVE_CURRENT_USER } from '../actions/session_action';
import { merge } from 'lodash'

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (oldState = _nullUser, action) => {
	Object.freeze(oldState)
	let currentUser = action.currentUser;

	switch(action.type){
		case RECEIVE_CURRENT_USER:
			return merge({}, {currentUser})
		default:
			return oldState
	}
};

export default sessionReducer;
