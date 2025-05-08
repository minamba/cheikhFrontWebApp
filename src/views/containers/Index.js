import {connect} from 'react-redux';
import {BaseApp} from '../components/Index';
import {addRegistrationSuccess, updateRegistrationSuccess, deleteRegistrationSuccess, getRegistrationsSuccess} from '../../lib/actions/RegistrationActions';
// import {getSeminaire, addSeminaire, updateSeminaire, deleteSeminaire} from '../../lib/actions/SeminaireActions';
// import {getPayment, addPayment, updatePayment, deletePayment} from '../../lib/actions/PaymentActions';


export const AppContainer = connect(
     function mapStateToProps(state){
        return {
            registrations : state.registrations
        }
    },
     function mapDispatchToProps(dispatch){
        return {    
            getRegistrationsSuccess : (registrations) => dispatch(getRegistrationsSuccess(registrations)),
            addRegistrationSuccess : (registration) => dispatch(addRegistrationSuccess(registration)),
            updateRegistrationSuccess : (registration) => dispatch(updateRegistrationSuccess(registration)),
            deleteRegistrationSuccess : (idRegistration) => dispatch(deleteRegistrationSuccess(idRegistration))
        }
    })
    (BaseApp);