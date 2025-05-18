import { actions } from "../actions/RegistrationPageActions";
import localStorageService from "../storage/storageService";

const initialState = {
    registrationPage : localStorageService.load("registrationPage") || []
}

function RegistrationPageReducers(state = initialState, action) {
    switch(action.type) {

        // Récupération
        case actions.GET_REGISTRATION_PAGE_SUCCESS:
            return {
                ...state,
                registrationPage: action.payload.registrationPage,
              };

        // Mise à jour
        case actions.UPDATE_REGISTRATION_PAGE_SUCCESS:
            state.registrationPage.map(registration => {
                if(registration.id === action.payload.id) {
                    return {...registration, ...action.payload.registration}
                }
                else{
                    return registration
                }
            })

        default:
            return state
    }
}

export default RegistrationPageReducers