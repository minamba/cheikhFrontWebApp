import {registration} from "../../components/data"; 


export const actions = {
    GET_REGISTRATION_REQUEST : "GET_REGISTRATION_REQUEST",
    GET_REGISTRATION_SUCCESS : "GET_REGISTRATION_SUCCESS",
    GET_REGISTRATION_FAILURE : "GET_REGISTRATION_FAILURE",

    UPDATE_REGISTRATION_REQUEST : "UPDATE_REGISTRATION_REQUEST",
    UPDATE_REGISTRATION_SUCCESS : "UPDATE_REGISTRATION_SUCCESS",
    UPDATE_REGISTRATION_FAILURE : "UPDATE_REGISTRATION_FAILURE",

    DELETE_REGISTRATION_REQUEST : "DELETE_REGISTRATION_REQUEST",
    DELETE_REGISTRATION_SUCCESS : "DELETE_REGISTRATION_SUCCESS",
    DELETE_REGISTRATION_FAILURE : "DELETE_REGISTRATION_FAILURE",

    ADD_REGISTRATION_REQUEST : "ADD_REGISTRATION_REQUEST",
    ADD_REGISTRATION_SUCCESS : "ADD_REGISTRATION_SUCCESS",
    ADD_REGISTRATION_FAILURE : "ADD_REGISTRATION_FAILURE",
   
}


//get
export function getRegistrationsRequest() {
    return {
        type : actions.GET_REGISTRATION_REQUEST,
    }
}

export function getRegistrationsSuccess({registrations}) {
    return {
        type : actions.GET_REGISTRATION_SUCCESS,
        payload : {registrations}
    }
}

export function getRegistrationsFailure(error) {
    return {
        type : actions.GET_REGISTRATION_FAILURE,
        payload : error
    }
}


//update
export function updateRegistrationRequest(registration) {
    return {
        type : actions.UPDATE_REGISTRATION_REQUEST,
        payload : registration
    }
}

export function updateRegistrationSuccess(registration) {
    return {
        type : actions.UPDATE_REGISTRATION_SUCCESS,
        payload : registration
    }
}

export function updateRegistrationFailure(error) {
    return {
        type : actions.UPDATE_REGISTRATION_FAILURE,
        payload : error
    }
}


//delete
export function deleteRegistrationRequest(idRegistration) {
    return {
        type : actions.DELETE_REGISTRATION_REQUEST,
        payload : idRegistration
    }
}

export function deleteRegistrationSuccess(idRegistration) {
    return {
        type : actions.DELETE_REGISTRATION_SUCCESS,
        payload : idRegistration
    }
}

export function deleteRegistrationFailure(error) {
    return {
        type : actions.DELETE_REGISTRATION_FAILURE,
        payload : error
    }
}

//add
export function addRegistrationRequest(registration) {
    return {
        type : actions.ADD_REGISTRATION_REQUEST,
        payload : registration
    }
}

export function addRegistrationSuccess(registration) {
    return {
        type : actions.ADD_REGISTRATION_SUCCESS,
        payload : registration
    }
}

export function addRegistrationFailure(error) {
    return {
        type : actions.ADD_REGISTRATION_FAILURE,
        payload : error
    }
}
