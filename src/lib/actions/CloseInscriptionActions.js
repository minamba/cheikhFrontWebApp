
export const actions = {
    GET_CLOSE_INSCRIPTION_REQUEST : "GET_CLOSE_INSCRIPTION_REQUEST",
    GET_CLOSE_INSCRIPTION_SUCCESS : "GET_CLOSE_INSCRIPTION_SUCCESS",
    GET_CLOSE_INSCRIPTION_FAILURE : "GET_CLOSE_INSCRIPTION_FAILURE",

    UPDATE_CLOSE_INSCRIPTION_REQUEST : "UPDATE_CLOSE_INSCRIPTION_REQUEST",
    UPDATE_CLOSE_INSCRIPTION_SUCCESS : "UPDATE_CLOSE_INSCRIPTION_SUCCESS",
    UPDATE_CLOSE_INSCRIPTION_FAILURE : "UPDATE_CLOSE_INSCRIPTION_FAILURE",   
}


//get
export function getCloseInscriptionRequest() {
    return {
        type : actions.GET_CLOSE_INSCRIPTION_REQUEST,
    }
}

export function getCloseInscriptionSuccess({closeInscription}) {
    return {
        type : actions.GET_CLOSE_INSCRIPTION_SUCCESS,
        payload : {closeInscription}
    }
}

export function getCloseInscriptionFailure(error) {
    return {
        type : actions.GET_CLOSE_INSCRIPTION_FAILURE,
        payload : error
    }
}


//update
export function updateCloseInscriptionRequest(closeInscription) {
    return {
        type : actions.UPDATE_CLOSE_INSCRIPTION_REQUEST,
        payload : closeInscription
    }
}

export function updateCloseInscriptionSuccess(closeInscription) {
    return {
        type : actions.UPDATE_CLOSE_INSCRIPTION_SUCCESS,
        payload : closeInscription
    }
}

export function updateCloseInscriptionFailure(error) {
    return {
        type : actions.UPDATE_CLOSE_INSCRIPTION_FAILURE,
        payload : error
    }
}
