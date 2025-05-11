import { actionsMail } from "../actions/MailActions";

const initialState = {
  recipient: [],
  recipientList: [],
};

function MailReducers(state = initialState, action) {
  switch (action.type) {

    // ✅ Ajout
    case actionsMail.SEND_SEMINAIRE_MAIL_SUCCESS:
      return {
        ...state,
        recipient: [...state.recipient, action.payload],
      };

    case actionsMail.SEND_SEMINAIRE_MAIL_GROUP_SUCCESS:
      return {
        ...state,
        recipientList: [...state.recipientList, action.payload],
      };

    case actionsMail.SEND_PAYMENT_MAIL_SUCCESS:
      return {
        ...state,
        recipient: [...state.recipient, action.payload],
      };

    case actionsMail.SEND_PAYMENT_MAIL_GROUP_SUCCESS:
      return {
        ...state,
        recipientList: [...state.recipientList, action.payload],
      };

    default:
      return state;
  }
}

export default MailReducers;