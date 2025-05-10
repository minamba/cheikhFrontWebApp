import { actionsSeminaire } from '../actions/SeminaireUsersActions';

const initialState = {
    showSemUsrSuccessPopup: false,
    showSemUsrErrorPopup: false
  };
  
  const UiSeminaireUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionsSeminaire.ADD_SEMINAIRE_USER_SUCCESS:
        return { ...state, showSemUsrSuccessPopup: true };


    case actionsSeminaire.ADD_SEMINAIRE_USER_FAILURE:
        return { ...state, showSemUsrErrorPopup: true };
  
      case "HIDE_POPUP":
        return { ...state, showSemUsrSuccessPopup: false, showSemUsrErrorPopup: false };
  
      default:
        return state;
    }
  };
  
  export default UiSeminaireUserReducer;