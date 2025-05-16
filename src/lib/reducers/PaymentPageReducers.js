import { actions } from "../actions/PaymentPageActions";

const initialState = {
    paymentPage : []
}

function PaymentPageReducers(state = initialState, action) {
    switch(action.type) {

        // Récupération
        case actions.GET_PAYMENT_PAGE_SUCCESS:
            return {
                ...state,
                paymentPage: action.payload.paymentPage,
              };

        // Mise à jour
        case actions.UPDATE_PAYMENT_PAGE_SUCCESS:
            state.paymentPage.map(paymentPage => {
                if( paymentPage.id === action.payload.id) {
                    return {...paymentPage, ...action.payload.paymentPage}
                }
                else{
                    return paymentPage
                }
            })

        default:
            return state
    }
}

export default PaymentPageReducers