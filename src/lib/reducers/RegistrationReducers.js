import { actions } from "../actions/RegistrationActions";
import localStorageService from "../storage/storageService";

const initialState = {
    registrations : localStorageService.load("registrations") || [],
    errorMessageAddRegistration : null,
    showErrorAddRegistration : false,
}

function RegistrationReducers(state = initialState, action) {
    switch(action.type) {

        // Récupération
        case actions.GET_REGISTRATION_SUCCESS:
            return {
                ...state,
                registrations: action.payload.registrations,
              };

        // Mise à jour
        case actions.UPDATE_REGISTRATION_SUCCESS:
            state.registrations.map(registration => {
                if(registration.id === action.payload.id) {
                    return {...registration, ...action.payload.registration}
                }
                else{
                    return registration
                }
            })

        // Suppression
        case actions.DELETE_REGISTRATION_SUCCESS:
              return state.registrations.filter(registration => registration.id !== action.payload)

        // Ajout
        case actions.ADD_REGISTRATION_SUCCESS:
            return {
                ...state,
                registrations: [...state.registrations, action.payload.registration],
                errorMessageAddRegistration: null,
                showErrorAddRegistration: false
            };

        case actions.ADD_REGISTRATION_FAILURE:
            return {...state, errorMessageAddRegistration : action.payload.error, showErrorAddRegistration : true}

        case actions.RESET_ADD_REGISTRATION:
            return {...state, errorMessageAddRegistration : null, showErrorAddRegistration : false}
        default:
            return state
    }
}

export default RegistrationReducers
