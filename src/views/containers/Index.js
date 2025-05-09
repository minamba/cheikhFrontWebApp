import {connect} from 'react-redux';
import {BaseApp} from '../components/Index';
import {addRegistrationSuccess, updateRegistrationSuccess, deleteRegistrationSuccess, getRegistrationsSuccess} from '../../lib/actions/RegistrationActions';
// import {getSeminaire, addSeminaire, updateSeminaire, deleteSeminaire} from '../../lib/actions/SeminaireActions';
// import {getPayment, addPayment, updatePayment, deletePayment} from '../../lib/actions/PaymentActions';


export const AppContainer = connect(
     function mapStateToProps(state){
        return {
            registrations : state.registrations,
            seminaires : state.seminaires,
            seminaireUsers : state.seminaireUsers,
            payments : state.payments
        }
    })
    (BaseApp);