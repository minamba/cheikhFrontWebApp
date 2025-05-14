export const actions = {
    GET_SESSIONS_REQUEST : "GET_SESSIONS_REQUEST",
    GET_SESSIONS_SUCCESS : "GET_SESSIONS_SUCCESS",
    GET_SESSIONS_FAILURE : "GET_SESSIONS_FAILURE",

    UPDATE_SESSIONS_REQUEST : "UPDATE_SESSIONS_REQUEST",
    UPDATE_SESSIONS_SUCCESS : "UPDATE_SESSIONS_SUCCESS",
    UPDATE_SESSIONS_FAILURE : "UPDATE_SESSIONS_FAILURE",

    DELETE_SESSIONS_REQUEST : "DELETE_SESSIONS_REQUEST",
    DELETE_SESSIONS_SUCCESS : "DELETE_SESSIONS_SUCCESS",
    DELETE_SESSIONS_FAILURE : "DELETE_SESSIONS_FAILURE",

    ADD_SESSIONS_REQUEST : "ADD_SESSIONS_REQUEST",
    ADD_SESSIONS_SUCCESS : "ADD_SESSIONS_SUCCESS",
    ADD_SESSIONS_FAILURE : "ADD_SESSIONS_FAILURE",
   
}


//get
export function getSessionsRequest() {
    return {
        type : actions.GET_SESSIONS_REQUEST,
    }
}

export function getSessionsSuccess({sessions}) {
    return {
        type : actions.GET_SESSIONS_SUCCESS,
        payload : {sessions}
    }
}

export function getSessionsFailure(error) {
    return {
        type : actions.GET_SESSIONS_FAILURE,
        payload : error
    }
}


//update
export function updateSessionsRequest(session) {
    return {
        type : actions.UPDATE_SESSIONS_REQUEST,
        payload : session
    }
}

export function updateSessionsSuccess(session) {
    return {
        type : actions.UPDATE_SESSIONS_SUCCESS,
        payload : session
    }
}

export function updateSessionsFailure(error) {
    return {
        type : actions.UPDATE_SESSIONS_FAILURE,
        payload : error
    }
}


//delete
export function deleteSessionsRequest(idSession) {
    return {
        type : actions.DELETE_SESSIONS_REQUEST,
        payload : idSession
    }
}

export function deleteSessionsSuccess(idSession) {
    return {
        type : actions.DELETE_SESSIONS_SUCCESS,
        payload : idSession
    }
}

export function deleteSessionsFailure(error) {
    return {
        type : actions.DELETE_SESSIONS_FAILURE,
        payload : error
    }
}

//add
export function addSessionsRequest(session) {
    return {
        type : actions.ADD_SESSIONS_REQUEST,
        payload : session
    }
}

export function addSessionsSuccess(session) {
    return {
        type : actions.ADD_SESSIONS_SUCCESS,
        payload : session
    }
}

export function addSessionsFailure(error) {
    return {
        type : actions.ADD_SESSIONS_FAILURE,
        payload : error
    }
}
