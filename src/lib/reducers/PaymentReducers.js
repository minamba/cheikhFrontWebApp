import { actions } from "../actions/PaymentActions";
import localStorageService from "../storage/storageService";

const initialState = {
    payments : localStorageService.load("payments") || [],
}

function PaymentReducers(state = initialState, action) {
    switch(action.type) {

        // Récupération
        case actions.GET_PAYMENT_SUCCESS:
            return {
                ...state,
                payments: action.payload.payments,
              };


        //ajout payment
        case actions.ADD_PAYMENT_SUCCESS:
            return {
                ...state,
                payments: [...state.payments, action.payload.payment],
                successAddPayment: true
              };

        // Mise à jour
        case actions.UPDATE_PAYMENT_SUCCESS:
            state.payments.map(payment => {
                if(payment.id === action.payload.id) {
                    return {...payment, ...action.payload.payment}
                }
                else{
                    return payment
                }
            })

        case actions.RESET_PAYMENT_SUCCESS:
            return {
                ...state,
                successAddPayment: false
            };

        default:
            return state
    }
}

export default PaymentReducers
