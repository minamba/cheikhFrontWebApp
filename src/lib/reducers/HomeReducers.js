import { actions } from "../actions/HomeActions";
import localStorageService from "../storage/storageService";

const initialState = {
    homes : [],
    homeAddSuccess : false
}

function HomeReducers(state = initialState, action) {
    switch(action.type) {

        // Récupération
        case actions.GET_HOMES_SUCCESS:
            return {
                ...state,
                homes: action.payload.homes,
              };

        // Mise à jour
        case actions.UPDATE_HOMES_SUCCESS:
        return {
            ...state,
            homes: state.homes.map(home =>
                home.id === action.payload.home.id
                    ? { ...home, ...action.payload.home }
                    : home
            )
        };

        // Suppression
        case actions.DELETE_HOMES_SUCCESS:
            return {
                ...state,
                homes: state.homes.filter(home => home.id !== action.payload)
            };

        // Ajout
        case actions.ADD_HOMES_SUCCESS:
            return {
                ...state,
                homes: [...state.homes, action.payload.home],
                homeAddSuccess : true
            };
        case actions.ADD_HOMES_FAILURE:
            return {
                ...state,
                homeAddSuccess : false
            };
        default:
            return state
    }
}

export default HomeReducers