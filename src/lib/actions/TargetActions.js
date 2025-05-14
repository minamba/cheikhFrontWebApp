export const actions = {
    GET_TARGETS_REQUEST : "GET_TARGETS_REQUEST",
    GET_TARGETS_SUCCESS : "GET_TARGETS_SUCCESS",
    GET_TARGETS_FAILURE : "GET_TARGETS_FAILURE",

    UPDATE_TARGETS_REQUEST : "UPDATE_TARGETS_REQUEST",
    UPDATE_TARGETS_SUCCESS : "UPDATE_TARGETS_SUCCESS",
    UPDATE_TARGETS_FAILURE : "UPDATE_TARGETS_FAILURE",

    DELETE_TARGETS_REQUEST : "DELETE_TARGETS_REQUEST",
    DELETE_TARGETS_SUCCESS : "DELETE_TARGETS_SUCCESS",
    DELETE_TARGETS_FAILURE : "DELETE_TARGETS_FAILURE",

    ADD_TARGETS_REQUEST : "ADD_TARGETS_REQUEST",
    ADD_TARGETS_SUCCESS : "ADD_TARGETS_SUCCESS",
    ADD_TARGETS_FAILURE : "ADD_TARGETS_FAILURE",
   
}


//get
export function getTargetsRequest() {
    return {
        type : actions.GET_TARGETS_REQUEST,
    }
}

export function getTargetsSuccess({targets}) {
    return {
        type : actions.GET_TARGETS_SUCCESS,
        payload : {targets}
    }
}

export function getTargetsFailure(error) {
    return {
        type : actions.GET_TARGETS_FAILURE,
        payload : error
    }
}


//update
export function updateTargetsRequest(target) {
    return {
        type : actions.UPDATE_TARGETS_REQUEST,
        payload : target
    }
}

export function updateTargetsSuccess(target) {
    return {
        type : actions.UPDATE_TARGETS_SUCCESS,
        payload : target
    }
}

export function updateTargetsFailure(error) {
    return {
        type : actions.UPDATE_TARGETS_FAILURE,
        payload : error
    }
}


//delete
export function deleteTargetsRequest(idTarget) {
    return {
        type : actions.DELETE_TARGETS_REQUEST,
        payload : idTarget
    }
}

export function deleteTargetsSuccess(idTarget) {
    return {
        type : actions.DELETE_TARGETS_SUCCESS,
        payload : idTarget
    }
}

export function deleteTargetsFailure(error) {
    return {
        type : actions.DELETE_TARGETS_FAILURE,
        payload : error
    }
}

//add
export function addTargetsRequest(target) {
    return {
        type : actions.ADD_TARGETS_REQUEST,
        payload : target
    }
}

export function addTargetsSuccess(target) {
    return {
        type : actions.ADD_TARGETS_SUCCESS,
        payload : target
    }
}

export function addTargetsFailure(error) {
    return {
        type : actions.ADD_TARGETS_FAILURE,
        payload : error
    }
}
