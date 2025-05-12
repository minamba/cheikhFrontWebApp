import {connect} from 'react-redux';
import {BaseApp} from '../components/Index';


export const AppContainer = connect(
     function mapStateToProps(state){
        return {
            registrations : state.registrations,
            seminaires : state.seminaires,
            seminaireUsers : state.seminaireUsers,
            payments : state.payments,
            recipient : state.recipient,
            recipientList : state.recipientList,
            showSuccessPopup : state.showSuccessPopup,
            showErrorPopup : state.showErrorPopup,
            showSuccessPayment : state.showSuccessPayment,
            showErrorPayment : state.showErrorPayment,
            registrationPage : state.registrationPage,
        }
    })
    (BaseApp);