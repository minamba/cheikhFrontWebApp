import { actions } from "../actions/SessionActions";
import localStorageService from "../storage/storageService";

const initialState = {
    sessions : localStorageService.load("sessions") || []
}

function SessionReducers(state = initialState, action) {
    switch(action.type) {

        // Récupération
        case actions.GET_SESSIONS_SUCCESS:
            return {
                ...state,
                sessions: action.payload.sessions,
              };

        // Mise à jour
        case actions.UPDATE_SESSIONS_SUCCESS:
            state.sessions.map(session => {
                if(session.id === action.payload.id) {
                    return {...session, ...action.payload.session}
                }
                else{
                    return session
                }
            })

        // Suppression
        case actions.DELETE_SESSIONS_SUCCESS:
              return state.sessions.filter(session => session.id !== action.payload)

        // Ajout
        case actions.ADD_SESSIONS_SUCCESS:
            return [...state.sessions, action.payload.session]
        default:
            return state
    }
}

export default SessionReducers