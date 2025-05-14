export const actions = {
    GET_IMAGES_REQUEST : "GET_IMAGES_REQUEST",
    GET_IMAGES_SUCCESS : "GET_IMAGES_SUCCESS",
    GET_IMAGES_FAILURE : "GET_IMAGES_FAILURE",

    UPDATE_IMAGES_REQUEST : "UPDATE_IMAGES_REQUEST",
    UPDATE_IMAGES_SUCCESS : "UPDATE_IMAGES_SUCCESS",
    UPDATE_IMAGES_FAILURE : "UPDATE_IMAGES_FAILURE",

    DELETE_IMAGES_REQUEST : "DELETE_IMAGES_REQUEST",
    DELETE_IMAGES_SUCCESS : "DELETE_IMAGES_SUCCESS",
    DELETE_IMAGES_FAILURE : "DELETE_IMAGES_FAILURE",

    ADD_IMAGES_REQUEST : "ADD_IMAGES_REQUEST",
    ADD_IMAGES_SUCCESS : "ADD_IMAGES_SUCCESS",
    ADD_IMAGES_FAILURE : "ADD_IMAGES_FAILURE",
   
}


//get
export function getImagesRequest() {
    return {
        type : actions.GET_IMAGES_REQUEST,
    }
}

export function getImagesSuccess({images}) {
    return {
        type : actions.GET_IMAGES_SUCCESS,
        payload : {images}
    }
}

export function getImagesFailure(error) {
    return {
        type : actions.GET_IMAGES_FAILURE,
        payload : error
    }
}


//update
export function updateImagesRequest(image) {
    return {
        type : actions.UPDATE_IMAGES_REQUEST,
        payload : image
    }
}

export function updateImagesSuccess(image) {
    return {
        type : actions.UPDATE_IMAGES_SUCCESS,
        payload : image
    }
}

export function updateImagesFailure(error) {
    return {
        type : actions.UPDATE_IMAGES_FAILURE,
        payload : error
    }
}


//delete
export function deleteImagesRequest(idImage) {
    return {
        type : actions.DELETE_IMAGES_REQUEST,
        payload : idImage
    }
}

export function deleteImagesSuccess(idImage) {
    return {
        type : actions.DELETE_IMAGES_SUCCESS,
        payload : idImage
    }
}

export function deleteImagesFailure(error) {
    return {
        type : actions.DELETE_IMAGES_FAILURE,
        payload : error
    }
}

//add
export function addImagesRequest(image) {
    return {
        type : actions.ADD_IMAGES_REQUEST,
        payload : image
    }
}

export function addImagesSuccess(image) {
    return {
        type : actions.ADD_IMAGES_SUCCESS,
        payload : image
    }
}

export function addImagesFailure(error) {
    return {
        type : actions.ADD_IMAGES_FAILURE,
        payload : error
    }
}
