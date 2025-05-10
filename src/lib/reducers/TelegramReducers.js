import { actionsTelegram } from "../actions/TelegramActions";

const initialState = {
  messages: []
};

function TelegramReducers(state = initialState, action) {
  switch (action.type) {

    // ✅ Ajout
    case actionsTelegram.SEND_TELEGRAM_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    default:
      return state;
  }
}

export default TelegramReducers;