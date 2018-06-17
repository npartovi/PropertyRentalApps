import { connect } from 'react-redux';
import AddressForm from './address_form';

import { createAddress} from '../../actions/address_action';

const mapStateToProps = (state, ownProps) => ({
    address: {street: "", city: "", state: "", zip_code: "", suite: "", tenant_first_name: "", tenant_last_name: "" }

});

const mapDispatchToProps = (dispatch) => ({
    action: (address) => dispatch(createAddress(address)),
});


export default connect(mapStateToProps, mapDispatchToProps)(AddressForm)


