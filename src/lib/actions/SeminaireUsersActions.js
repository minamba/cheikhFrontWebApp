export const actionsSeminaire = {
    GET_SEMINAIRE_USER_REQUEST : "GET_SEMINAIRE_USER_REQUEST",
    GET_SEMINAIRE_USER_SUCCESS : "GET_SEMINAIRE_USER_SUCCESS",
    GET_SEMINAIRE_USER_FAILURE : "GET_SEMINAIRE_USER_FAILURE",

    UPDATE_SEMINAIRE_USER_REQUEST : "UPDATE_SEMINAIRE_USER_REQUEST",
    UPDATE_SEMINAIRE_USER_SUCCESS : "UPDATE_SEMINAIRE_USER_SUCCESS",
    UPDATE_SEMINAIRE_USER_FAILURE : "UPDATE_SEMINAIRE_USER_FAILURE",

    DELETE_SEMINAIRE_USER_REQUEST : "DELETE_SEMINAIRE_USER_REQUEST",
    DELETE_SEMINAIRE_USER_SUCCESS : "DELETE_SEMINAIRE_USER_SUCCESS",
    DELETE_SEMINAIRE_USER_FAILURE : "DELETE_SEMINAIRE_USER_FAILURE",

    ADD_SEMINAIRE_USER_REQUEST : "ADD_SEMINAIRE_USER_REQUEST",
    ADD_SEMINAIRE_USER_SUCCESS : "ADD_SEMINAIRE_USER_SUCCESS",
    ADD_SEMINAIRE_USER_FAILURE : "ADD_SEMINAIRE_USER_FAILURE",
   
}


//get
export function getSeminairesUserRequest() {
    return {
        type : actionsSeminaire.GET_SEMINAIRE_USER_REQUEST,
    }
}

export function getSeminairesUserSuccess({seminairesUsers}) {
    return {
        type : actionsSeminaire.GET_SEMINAIRE_USER_SUCCESS,
        payload : {seminairesUsers}
    }
}

export function getSeminairesUserFailure(error) {
    return {
        type : actionsSeminaire.GET_SEMINAIRE_USER_FAILURE,
        payload : error
    }
}


//update
export function updateSeminaireUserRequest(seminaireUser) {
    return {
        type : actionsSeminaire.UPDATE_SEMINAIRE_USER_REQUEST,
        payload : seminaireUser
    }
}

export function updateSeminaireUserSuccess(seminaireUser) {
    return {
        type : actionsSeminaire.UPDATE_SEMINAIRE_USER_SUCCESS,
        payload : seminaireUser
    }
}

export function updateSeminaireUserFailure(error) {
    return {
        type : actionsSeminaire.UPDATE_SEMINAIRE_USER_FAILURE,
        payload : error
    }
}


//delete
export function deleteSeminaireUserRequest(idSeminaire) {
    return {
        type : actionsSeminaire.DELETE_SEMINAIRE_USER_REQUEST,
        payload : idSeminaire
    }
}

export function deleteSeminaireUserSuccess(idSeminaire) {
    return {
        type : actionsSeminaire.DELETE_SEMINAIRE_USER_SUCCESS,
        payload : idSeminaire
    }
}

export function deleteSeminaireUserFailure(error) {
    return {
        type : actionsSeminaire.DELETE_SEMINAIRE_USER_FAILURE,
        payload : error
    }
}

//add
export function addSeminaireUserRequest(seminaireUser) {
    return {
        type : actionsSeminaire.ADD_SEMINAIRE_USER_REQUEST,
        payload : seminaireUser
    }
}

export function addSeminaireUserSuccess(seminaireUser) {
    return {
        type : actionsSeminaire.ADD_SEMINAIRE_USER_SUCCESS,
        payload : seminaireUser
    }
}

export function addSeminaireUserFailure(error) {
    return {
        type : actionsSeminaire.ADD_SEMINAIRE_USER_FAILURE,
        payload : error
    }
}
