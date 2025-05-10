import { actions } from "../actions/PaymentActions";

const initialState = {
  showSuccessPayment: false,
  showErrorPayment: false
  };
  
  const UiPaymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case actions.ADD_PAYMENT_SUCCESS:
        return { ...state, showSuccessPayment: true };


    case actions.ADD_PAYMENT_FAILURE:
        return { ...state, showErrorPayment: true };
  
      case "HIDE_POPUP":
        return { ...state, showSuccessPayment: false, showErrorPayment: false };
  
      default:
        return state;
    }
  };
  
  export default UiPaymentReducer;