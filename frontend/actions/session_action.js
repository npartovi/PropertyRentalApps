import * as UserApiUtil from '../util/session_api_util';

export const RECEIEVE_CURRENT_USER = 'RECEIEVE_CURRENT_USER';
export const RECEIVE_SESSSION_ERRORS = 'RECEIVE_SESSSION_ERRORS';

export const signup = (user) => (dispatch) => (
	UserApiUtil.signup(user)
		.then(user => dispatch(receiveCurrentUser(user)))


);

export const login = (user) => (dispatch) => (
	UserApiUtil.login(user)
		.then(user => dispatch(receiveCurrentUser(user)))

);

export const logout = (logout) => (dispatch) => (
	UserApiUtil.logout()
		.then(() => dispatch(receiveCurrentUser(null)))
);



const receiveCurrentUser = currentUser => ({
	type: RECEIEVE_CURRENT_USER,
	currentUser


});


const receiveSessionErrors = errors => ({
	type: RECEIVE_SESSSION_ERRORS,
	errors
});

