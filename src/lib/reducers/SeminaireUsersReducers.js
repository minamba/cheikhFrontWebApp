import { actionsSeminaire } from "../actions/SeminaireUsersActions";
import localStorageService from "../storage/storageService";

const initialState = {
  seminairesUsers: localStorageService.load("seminairesUsers") || [],
  addSeminairSuccess : false,
  addSeminairError : false,
  errorMessageAddSeminaireUser : null
};

function SeminaireUsersReducers(state = initialState, action) {
  switch (action.type) {
    // ✅ Récupération
    case actionsSeminaire.GET_SEMINAIRE_USER_SUCCESS:
      return {
        ...state,
        seminairesUsers: action.payload.seminairesUsers,
      };

    // ✅ Mise à jour
    case actionsSeminaire.UPDATE_SEMINAIRE_USER_SUCCESS:
      return {
        ...state,
        seminairesUsers: state.seminairesUsers.map((seminaireUser) =>
          seminaireUser.id === action.payload.id
            ? { ...seminaireUser, ...action.payload }
            : seminaireUser
        ),
      };

    // ✅ Suppression
    case actionsSeminaire.DELETE_SEMINAIRE_USER_SUCCESS:
      return {
        ...state,
        seminairesUsers: state.seminairesUsers.filter(
          (seminaireUser) => seminaireUser.id !== action.payload
        ),
      };

    // ✅ Ajout
    case actionsSeminaire.ADD_SEMINAIRE_USER_SUCCESS:
      return {
        ...state,
        seminairesUsers: [...state.seminairesUsers, action.payload],
        addSeminairSuccess : true
      };

    case actionsSeminaire.ADD_SEMINAIRE_USER_FAILURE:
      return {
        ...state,
        addSeminairError : true,
        errorMessageAddSeminaireUser : action.payload.error
      };

      case "HIDE_POPUP":
        return { ...state, addSeminairSuccess: false, addSeminairError: false, errorMessageAddSeminaireUser : null };

    default:
      return state;
  }
}

export default SeminaireUsersReducers;