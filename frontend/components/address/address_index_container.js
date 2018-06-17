import { connect } from 'react-redux';
import AddressIndex from './address_index'
import { fetchAddresses } from '../../actions/address_action';

const mapStateToProps = (state) => ({
    addresses: Object.keys(state.address).map(id => state.address[id])
})

const mapDispatchToProps = (dispatch) => ({
    fetchAddresses: ()=> dispatch(fetchAddresses())
})

export default connect (mapStateToProps,mapDispatchToProps)(AddressIndex)