
export const actions = {
    GET_REGISTRATION_PAGE_REQUEST : "GET_REGISTRATION_PAGE_REQUEST",
    GET_REGISTRATION_PAGE_SUCCESS : "GET_REGISTRATION_PAGE_SUCCESS",
    GET_REGISTRATION_PAGE_FAILURE : "GET_REGISTRATION_PAGE_FAILURE",

    UPDATE_REGISTRATION_PAGE_REQUEST : "UPDATE_REGISTRATION_PAGE_REQUEST",
    UPDATE_REGISTRATION_PAGE_SUCCESS : "UPDATE_REGISTRATION_PAGE_SUCCESS",
    UPDATE_REGISTRATION_PAGE_FAILURE : "UPDATE_REGISTRATION_PAGE_FAILURE",   
}


//get
export function getRegistrationPageRequest() {
    return {
        type : actions.GET_REGISTRATION_PAGE_REQUEST,
    }
}

export function getRegistrationPageSuccess({registrationPage}) {
    return {
        type : actions.GET_REGISTRATION_PAGE_SUCCESS,
        payload : {registrationPage}
    }
}

export function getRegistrationPageFailure(error) {
    return {
        type : actions.GET_REGISTRATION_PAGE_FAILURE,
        payload : error
    }
}


//update
export function updateRegistrationPageRequest(registrationPage) {
    return {
        type : actions.UPDATE_REGISTRATION_PAGE_REQUEST,
        payload : registrationPage
    }
}

export function updateRegistrationPageSuccess(registrationPage) {
    return {
        type : actions.UPDATE_REGISTRATION_PAGE_SUCCESS,
        payload : registrationPage
    }
}

export function updateRegistrationPageFailure(error) {
    return {
        type : actions.UPDATE_REGISTRATION_PAGE_FAILURE,
        payload : error
    }
}
