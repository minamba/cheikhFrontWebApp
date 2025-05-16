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
            addSeminairSuccess : state.addSeminairSuccess,
            addSeminairError : state.addSeminairError,
            errorMessageAddSeminaireUser : state.errorMessageAddSeminaireUser,
            errorMessageAddPayment : state.errorMessageAddPayment,
            successAddPayment : state.successAddPayment,
            themes : state.themes,
            targets : state.targets,
            sessions : state.sessions,
            images : state.images,
            medias : state.medias,
            homes : state.homes,
            showSuccessUpload : state.showSuccessUpload,
            showErrorUpload : state.showErrorUpload,
            closeInscription : state.closeInscription,
            paymentPage : state.paymentPage,
        }
    })
    (BaseApp);