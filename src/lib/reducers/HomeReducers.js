import { actions } from "../actions/HomeActions";

const initialState = {
    homes : []
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
            state.homes.map(home => {
                if(home.id === action.payload.id) {
                    return {...home, ...action.payload.home}
                }
                else{
                    return home
                }
            })

        // Suppression
        case actions.DELETE_HOMES_SUCCESS:
              return state.homes.filter(home => home.id !== action.payload)

        // Ajout
        case actions.ADD_HOMES_SUCCESS:
            return [...state.homes, action.payload.home]
        default:
            return state
    }
}

export default HomeReducers