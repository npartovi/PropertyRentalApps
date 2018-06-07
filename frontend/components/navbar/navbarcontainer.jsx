import { connect } from 'react-redux';
import { logout } from '../../actions/session_action';
import Navbar from './navbar'


const mapStateToProps = (state) => ({
	currentUser: state.sessions.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch()
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
