export const actions = {
    GET_MEDIAS_REQUEST : "GET_MEDIAS_REQUEST",
    GET_MEDIAS_SUCCESS : "GET_MEDIAS_SUCCESS",
    GET_MEDIAS_FAILURE : "GET_MEDIAS_FAILURE",

    UPDATE_MEDIAS_REQUEST : "UPDATE_MEDIAS_REQUEST",
    UPDATE_MEDIAS_SUCCESS : "UPDATE_MEDIAS_SUCCESS",
    UPDATE_MEDIAS_FAILURE : "UPDATE_MEDIAS_FAILURE",

    DELETE_MEDIAS_REQUEST : "DELETE_MEDIAS_REQUEST",
    DELETE_MEDIAS_SUCCESS : "DELETE_MEDIAS_SUCCESS",
    DELETE_MEDIAS_FAILURE : "DELETE_MEDIAS_FAILURE",

    ADD_MEDIAS_REQUEST : "ADD_MEDIAS_REQUEST",
    ADD_MEDIAS_SUCCESS : "ADD_MEDIAS_SUCCESS",
    ADD_MEDIAS_FAILURE : "ADD_MEDIAS_FAILURE",
   
}


//get
export function getMediasRequest() {
    return {
        type : actions.GET_MEDIAS_REQUEST,
    }
}

export function getMediasSuccess({medias}) {
    return {
        type : actions.GET_MEDIAS_SUCCESS,
        payload : {medias}
    }
}

export function getMediasFailure(error) {
    return {
        type : actions.GET_MEDIAS_FAILURE,
        payload : error
    }
}


//update
export function updateMediasRequest(media) {
    return {
        type : actions.UPDATE_MEDIAS_REQUEST,
        payload : media
    }
}

export function updateMediasSuccess(media) {
    return {
        type : actions.UPDATE_MEDIAS_SUCCESS,
        payload : media
    }
}

export function updateMediasFailure(error) {
    return {
        type : actions.UPDATE_MEDIAS_FAILURE,
        payload : error
    }
}


//delete
export function deleteMediasRequest(idMedia) {
    return {
        type : actions.DELETE_MEDIAS_REQUEST,
        payload : idMedia
    }
}

export function deleteMediasSuccess(idMedia) {
    return {
        type : actions.DELETE_MEDIAS_SUCCESS,
        payload : idMedia
    }
}

export function deleteMediasFailure(error) {
    return {
        type : actions.DELETE_MEDIAS_FAILURE,
        payload : error
    }
}

//add
export function addMediasRequest(media) {
    return {
        type : actions.ADD_MEDIAS_REQUEST,
        payload : media
    }
}

export function addMediasSuccess(media) {
    return {
        type : actions.ADD_MEDIAS_SUCCESS,
        payload : media
    }
}

export function addMediasFailure(error) {
    return {
        type : actions.ADD_MEDIAS_FAILURE,
        payload : error
    }
}
