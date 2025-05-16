import { actionsStripe } from "../actions/stripeActions";

const initialState = {
  stripePaymentSuccess: false,
  stripePaymentFailure: false,
  sessionUrl: null,
  errorStripePayment : null
};

function StripeReducers(state = initialState, action) {
  switch (action.type) {

    // ✅ Ajout
    case actionsStripe.SEND_STRIPE_SUCCESS:
      return {...state,stripePaymentSuccess: true, sessionUrl: action.payload.sessionUrl};

    case actionsStripe.SEND_STRIPE_FAILURE:
      return {...state,tripePaymentFailure: true, errorStripePayment : action.payload};

    case "HIDE_POPUP":
      return {...state,stripePaymentSuccess: false,stripePaymentFailure: false, errorStripePayment : null};

    default:
      return state;
  }
}

export default StripeReducers;