import { actions } from "../actions/ThemeActions";

const initialState = {
    themes : []
}

function ThemeReducers(state = initialState, action) {
    switch(action.type) {

        // Récupération
        case actions.GET_THEMES_SUCCESS:
            return {
                ...state,
                themes: action.payload.themes,
              };

        // Mise à jour
        case actions.UPDATE_THEMES_SUCCESS:
            state.themes.map(theme => {
                if(theme.id === action.payload.id) {
                    return {...theme, ...action.payload.theme}
                }
                else{
                    return theme
                }
            })

        // Suppression
        case actions.DELETE_THEMES_SUCCESS:
              return state.themes.filter(theme => theme.id !== action.payload)

        // Ajout
        case actions.ADD_THEMES_SUCCESS:
            return [...state.themes, action.payload.theme]
        default:
            return state
    }
}

export default ThemeReducers