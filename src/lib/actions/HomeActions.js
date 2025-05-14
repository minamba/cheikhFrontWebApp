export const actions = {
    GET_HOMES_REQUEST : "GET_HOMES_REQUEST",
    GET_HOMES_SUCCESS : "GET_HOMES_SUCCESS",
    GET_HOMES_FAILURE : "GET_HOMES_FAILURE",

    UPDATE_HOMES_REQUEST : "UPDATE_HOMES_REQUEST",
    UPDATE_HOMES_SUCCESS : "UPDATE_HOMES_SUCCESS",
    UPDATE_HOMES_FAILURE : "UPDATE_HOMES_FAILURE",

    DELETE_HOMES_REQUEST : "DELETE_HOMES_REQUEST",
    DELETE_HOMES_SUCCESS : "DELETE_HOMES_SUCCESS",
    DELETE_HOMES_FAILURE : "DELETE_HOMES_FAILURE",

    ADD_HOMES_REQUEST : "ADD_HOMES_REQUEST",
    ADD_HOMES_SUCCESS : "ADD_HOMES_SUCCESS",
    ADD_HOMES_FAILURE : "ADD_HOMES_FAILURE",
   
}


//get
export function getHomesRequest() {
    return {
        type : actions.GET_HOMES_REQUEST,
    }
}

export function getHomesSuccess({homes}) {
    return {
        type : actions.GET_HOMES_SUCCESS,
        payload : {homes}
    }
}

export function getHomesFailure(error) {
    return {
        type : actions.GET_HOMES_FAILURE,
        payload : error
    }
}


//update
export function updateHomesRequest(home) {
    return {
        type : actions.UPDATE_HOMES_REQUEST,
        payload : home
    }
}

export function updateHomesSuccess(home) {
    return {
        type : actions.UPDATE_HOMES_SUCCESS,
        payload : home
    }
}

export function updateHomesFailure(error) {
    return {
        type : actions.UPDATE_HOMES_FAILURE,
        payload : error
    }
}


//delete
export function deleteHomesRequest(idHome) {
    return {
        type : actions.DELETE_HOMES_REQUEST,
        payload : idHome
    }
}

export function deleteHomesSuccess(idHome) {
    return {
        type : actions.DELETE_HOMES_SUCCESS,
        payload : idHome
    }
}

export function deleteHomesFailure(error) {
    return {
        type : actions.DELETE_HOMES_FAILURE,
        payload : error
    }
}

//add
export function addHomesRequest(home) {
    return {
        type : actions.ADD_HOMES_REQUEST,
        payload : home
    }
}

export function addHomesSuccess(home) {
    return {
        type : actions.ADD_HOMES_SUCCESS,
        payload : home
    }
}

export function addHomesFailure(error) {
    return {
        type : actions.ADD_HOMES_FAILURE,
        payload : error
    }
}
