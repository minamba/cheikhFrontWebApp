import { actions } from "../actions/CloseInscriptionActions";
import localStorageService from "../storage/storageService";

const initialState = {
    closeInscription : localStorageService.load("closeInscription") || []
}

function CloseInscriptionReducers(state = initialState, action) {
    switch(action.type) {

        // Récupération
        case actions.GET_CLOSE_INSCRIPTION_SUCCESS:
            return {
                ...state,
                closeInscription: action.payload.closeInscription,
              };

        // Mise à jour
        case actions.UPDATE_CLOSE_INSCRIPTION_SUCCESS:
            state.closeInscription.map(closeInscription => {
                if( closeInscription.id === action.payload.id) {
                    return {...closeInscription, ...action.payload.closeInscription}
                }
                else{
                    return closeInscription
                }
            })

        default:
            return state
    }
}

export default CloseInscriptionReducers