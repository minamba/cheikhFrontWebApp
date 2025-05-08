export const actionsSeminaire = {
    GET_SEMINAIRE_REQUEST : "GET_SEMINAIRE_REQUEST",
    GET_SEMINAIRE_SUCCESS : "GET_SEMINAIRE_SUCCESS",
    GET_SEMINAIRE_FAILURE : "GET_SEMINAIRE_FAILURE",

    UPDATE_SEMINAIRE_REQUEST : "UPDATE_SEMINAIRE_REQUEST",
    UPDATE_SEMINAIRE_SUCCESS : "UPDATE_SEMINAIRE_SUCCESS",
    UPDATE_SEMINAIRE_FAILURE : "UPDATE_SEMINAIRE_FAILURE",

    DELETE_SEMINAIRE_REQUEST : "DELETE_SEMINAIRE_REQUEST",
    DELETE_SEMINAIRE_SUCCESS : "DELETE_SEMINAIRE_SUCCESS",
    DELETE_SEMINAIRE_FAILURE : "DELETE_SEMINAIRE_FAILURE",

    ADD_SEMINAIRE_REQUEST : "ADD_SEMINAIRE_REQUEST",
    ADD_SEMINAIRE_SUCCESS : "ADD_SEMINAIRE_SUCCESS",
    ADD_SEMINAIRE_FAILURE : "ADD_SEMINAIRE_FAILURE",
   
}


//get
export function getSeminairesRequest() {
    return {
        type : actionsSeminaire.GET_SEMINAIRE_REQUEST,
    }
}

export function getSeminairesSuccess({seminaires}) {
    return {
        type : actionsSeminaire.GET_SEMINAIRE_SUCCESS,
        payload : {seminaires}
    }
}

export function getSeminaireFailure(error) {
    return {
        type : actionsSeminaire.GET_SEMINAIRE_FAILURE,
        payload : error
    }
}


//update
export function updateSeminaireRequest(seminaire) {
    return {
        type : actionsSeminaire.UPDATE_SEMINAIRE_REQUEST,
        payload : seminaire
    }
}

export function updateSeminaireSuccess(registration) {
    return {
        type : actionsSeminaire.UPDATE_SEMINAIRE_SUCCESS,
        payload : registration
    }
}

export function updateSeminaireFailure(error) {
    return {
        type : actionsSeminaire.UPDATE_SEMINAIRE_FAILURE,
        payload : error
    }
}


//delete
export function deleteSeminaireRequest(idSeminaire) {
    return {
        type : actionsSeminaire.DELETE_SEMINAIRE_REQUEST,
        payload : idSeminaire
    }
}

export function deleteSeminaireSuccess(idSeminaire) {
    return {
        type : actionsSeminaire.DELETE_SEMINAIRE_SUCCESS,
        payload : idSeminaire
    }
}

export function deleteSeminaireFailure(error) {
    return {
        type : actionsSeminaire.DELETE_SEMINAIRE_FAILURE,
        payload : error
    }
}

//add
export function addSeminaireRequest(seminaire) {
    return {
        type : actionsSeminaire.ADD_SEMINAIRE_REQUEST,
        payload : seminaire
    }
}

export function addSeminaireSuccess(seminaire) {
    return {
        type : actionsSeminaire.ADD_SEMINAIRE_SUCCESS,
        payload : seminaire
    }
}

export function addSeminaireFailure(error) {
    return {
        type : actionsSeminaire.ADD_SEMIANIRE_FAILURE,
        payload : error
    }
}
