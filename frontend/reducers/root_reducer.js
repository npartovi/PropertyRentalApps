import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import addressReducer from './address_reducer';


const rootReducer = combineReducers({
	sessions: sessionReducer,
	address: addressReducer
	
})

export default rootReducer;