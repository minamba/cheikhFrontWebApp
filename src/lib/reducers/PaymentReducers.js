import { actions } from "../actions/PaymentActions";

const initialState = {
    payments : []
}

function PaymentReducers(state = initialState, action) {
    switch(action.type) {

        // Récupération
        case actions.GET_PAYMENT_SUCCESS:
            return {
                ...state,
                payments: action.payload.payments,
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

        // Suppression
        case actions.DELETE_PAYMENT_SUCCESS:
              return state.payments.filter(payment => payment.id !== action.payload)

        // Ajout
        case actions.ADD_PAYMENT_SUCCESS:
            return [...state.payments, action.payload.payment]
        default:
            return state
    }
}

export default PaymentReducers
