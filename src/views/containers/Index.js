import {connect} from 'react-redux';
import {BaseApp} from '../components/Index';


export const AppContainer = connect(
     function mapStateToProps(state){
        return {
            registrations : state.registrations,
            seminaires : state.seminaires,
            seminaireUsers : state.seminaireUsers,
            payments : state.payments,
            showSuccessPopup : state.showSuccessPopup,
            showErrorPopup : state.showErrorPopup,
            showSemUsrSuccessPopup : state.showSemUsrSuccessPopup,
            showSemUsrErrorPopup : state.showSemUsrErrorPopup,
            showSuccessPayment : state.showSuccessPayment,
            showErrorPayment : state.showErrorPayment
        }
    })
    (BaseApp);