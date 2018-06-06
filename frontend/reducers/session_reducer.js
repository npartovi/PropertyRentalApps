import { RECEIVE_CURRENT_USER } from '../actions/session_action';

const _nullSession = {
  currentUser: null
};

const sessionReducer = (state = _nullSession, action) => {
	Object.freeze(state)
	switch(action.type){
		case RECEIVE_CURRENT_USER:
			return Object.assign({}, {currentUser: action.currentUser})
		default:
			return state
	}

}

export default sessionReducer