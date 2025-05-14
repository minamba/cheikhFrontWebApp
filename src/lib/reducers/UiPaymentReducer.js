import { actions } from "../actions/PaymentActions";

const initialState = {
  showSuccessPayment: false,
  showErrorPayment: false,
  errorMessageAddPayment : null,
  successAddPayment : false
  };
  
  const UiPaymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case actions.ADD_PAYMENT_SUCCESS:
        return { ...state, showSuccessPayment: true, successAddPayment : true };


    case actions.ADD_PAYMENT_FAILURE:
        return { ...state, showErrorPayment: true, errorMessageAddPayment : action.payload.error, successAddPayment : false };
  
      case "HIDE_POPUP":
        return { ...state, showSuccessPayment: false, showErrorPayment: false, errorMessageAddPayment : null, successAddPayment : false };
  
      default:
        return state;
    }
  };
  
  export default UiPaymentReducer;


  