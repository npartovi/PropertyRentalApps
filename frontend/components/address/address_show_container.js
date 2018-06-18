import { connect } from 'react-redux';
import AddressShow from './address_show';
import { fetchAddress } from '../../actions/address_action';

const mapStateToProps = (state, ownProps) => ({
    address: state.address[ownProps.match.params.id]
})

const mapDispatchToProps = (dispatch) => ({
    fetchAddress: (id) => dispatch(fetchAddress(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddressShow);