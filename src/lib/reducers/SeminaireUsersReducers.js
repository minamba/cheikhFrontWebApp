import { actionsSeminaire } from "../actions/SeminaireUsersActions";

const initialState = {
  seminairesUsers: []
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
      };

    default:
      return state;
  }
}

export default SeminaireUsersReducers;