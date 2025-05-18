import { actions } from "../actions/TargetActions";
import localStorageService from "../storage/storageService";

const initialState = {
    targets : localStorageService.load("targets") || []
}

function TargetReducers(state = initialState, action) {
    switch(action.type) {

        // Récupération
        case actions.GET_TARGETS_SUCCESS:
            return {
                ...state,
                targets: action.payload.targets,
              };

        // Mise à jour
        case actions.UPDATE_TARGETS_SUCCESS:
            state.targets.map(target => {
                if(target.id === action.payload.id) {
                    return {...target, ...action.payload.target}
                }
                else{
                    return target
                }
            })

        // Suppression
        case actions.DELETE_TARGETS_SUCCESS:
              return state.targets.filter(target => target.id !== action.payload)

        // Ajout
        case actions.ADD_TARGETS_SUCCESS:
            return [...state.targets, action.payload.target]
        default:
            return state
    }
}

export default TargetReducers