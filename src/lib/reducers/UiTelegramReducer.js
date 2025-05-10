import { actionsTelegram } from '../actions/TelegramActions';

// uiReducer.js
const initialState = {
  showSuccessPopup: false,
  showErrorPopup: false
  };
  
  const uiReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionsTelegram.SEND_TELEGRAM_MESSAGE_SUCCESS:
        return { ...state, showSuccessPopup: true };


    case actionsTelegram.SEND_TELEGRAM_MESSAGE_FAILURE:
        return { ...state, showErrorPopup: true };
  
      case "HIDE_POPUP":
        return { ...state, showSuccessPopup: false, showErrorPopup: false };
  
      default:
        return state;
    }
  };
  
  export default uiReducer;