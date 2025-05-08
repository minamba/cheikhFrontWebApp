import { actionsSeminaire } from "../actions/SeminaireActions";

const initialState = {
  seminaires: []
};

function SeminaireReducers(state = initialState, action) {
  switch (action.type) {
    // ✅ Récupération
    case actionsSeminaire.GET_SEMINAIRE_SUCCESS:
      return {
        ...state,
        seminaires: action.payload.seminaires,
      };

    // ✅ Mise à jour
    case actionsSeminaire.UPDATE_SEMINAIRE_SUCCESS:
      return {
        ...state,
        seminaires: state.seminaires.map((seminaire) =>
          seminaire.id === action.payload.id
            ? { ...seminaire, ...action.payload }
            : seminaire
        ),
      };

    // ✅ Suppression
    case actionsSeminaire.DELETE_SEMINAIRE_SUCCESS:
      return {
        ...state,
        seminaires: state.seminaires.filter(
          (seminaire) => seminaire.id !== action.payload
        ),
      };

    // ✅ Ajout
    case actionsSeminaire.ADD_SEMINAIRE_SUCCESS:
      return {
        ...state,
        seminaires: [...state.seminaires, action.payload],
      };

    default:
      return state;
  }
}

export default SeminaireReducers;