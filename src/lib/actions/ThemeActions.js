export const actions = {
    GET_THEMES_REQUEST : "GET_THEMES_REQUEST",
    GET_THEMES_SUCCESS : "GET_THEMES_SUCCESS",
    GET_THEMES_FAILURE : "GET_THEMES_FAILURE",

    UPDATE_THEMES_REQUEST : "UPDATE_THEMES_REQUEST",
    UPDATE_THEMES_SUCCESS : "UPDATE_THEMES_SUCCESS",
    UPDATE_THEMES_FAILURE : "UPDATE_THEMES_FAILURE",

    DELETE_THEMES_REQUEST : "DELETE_THEMES_REQUEST",
    DELETE_THEMES_SUCCESS : "DELETE_THEMES_SUCCESS",
    DELETE_THEMES_FAILURE : "DELETE_THEMES_FAILURE",

    ADD_THEMES_REQUEST : "ADD_THEMES_REQUEST",
    ADD_THEMES_SUCCESS : "ADD_THEMES_SUCCESS",
    ADD_THEMES_FAILURE : "ADD_THEMES_FAILURE",
   
}


//get
export function getThemesRequest() {
    return {
        type : actions.GET_THEMES_REQUEST,
    }
}

export function getThemesSuccess({themes}) {
    return {
        type : actions.GET_THEMES_SUCCESS,
        payload : {themes}
    }
}

export function getThemesFailure(error) {
    return {
        type : actions.GET_THEMES_FAILURE,
        payload : error
    }
}


//update
export function updateThemesRequest(theme) {
    return {
        type : actions.UPDATE_THEMES_REQUEST,
        payload : theme
    }
}

export function updateThemesSuccess(theme) {
    return {
        type : actions.UPDATE_THEMES_SUCCESS,
        payload : theme
    }
}

export function updateThemesFailure(error) {
    return {
        type : actions.UPDATE_THEMES_FAILURE,
        payload : error
    }
}


//delete
export function deleteThemesRequest(idTheme) {
    return {
        type : actions.DELETE_THEMES_REQUEST,
        payload : idTheme
    }
}

export function deleteThemesSuccess(idTheme) {
    return {
        type : actions.DELETE_THEMES_SUCCESS,
        payload : idTheme
    }
}

export function deleteThemesFailure(error) {
    return {
        type : actions.DELETE_THEMES_FAILURE,
        payload : error
    }
}

//add
export function addThemesRequest(theme) {
    return {
        type : actions.ADD_THEMES_REQUEST,
        payload : theme
    }
}

export function addThemesSuccess(theme) {
    return {
        type : actions.ADD_THEMES_SUCCESS,
        payload : theme
    }
}

export function addThemesFailure(error) {
    return {
        type : actions.ADD_THEMES_FAILURE,
        payload : error
    }
}
