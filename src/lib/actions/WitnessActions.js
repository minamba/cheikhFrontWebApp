export const actions = {
    GET_WITNESSES_REQUEST : "GET_WITNESSES_REQUEST",
    GET_WITNESSES_SUCCESS : "GET_WITNESSES_SUCCESS",
    GET_WITNESSES_FAILURE : "GET_WITNESSES_FAILURE",

    UPDATE_WITNESSES_REQUEST : "UPDATE_WITNESSES_REQUEST",
    UPDATE_WITNESSES_SUCCESS : "UPDATE_WITNESSES_SUCCESS",
    UPDATE_WITNESSES_FAILURE : "UPDATE_WITNESSES_FAILURE",

    DELETE_WITNESSES_REQUEST : "DELETE_WITNESSES_REQUEST",
    DELETE_WITNESSES_SUCCESS : "DELETE_WITNESSES_SUCCESS",
    DELETE_WITNESSES_FAILURE : "DELETE_WITNESSES_FAILURE",

    ADD_WITNESSES_REQUEST : "ADD_WITNESSES_REQUEST",
    ADD_WITNESSES_SUCCESS : "ADD_WITNESSES_SUCCESS",
    ADD_WITNESSES_FAILURE : "ADD_WITNESSES_FAILURE",
   
}


//get
export function getWitnessesRequest() {
    return {
        type : actions.GET_WITNESSES_REQUEST,
    }
}

export function getWitnessesSuccess({witnesses}) {
    return {
        type : actions.GET_WITNESSES_SUCCESS,
        payload : {witnesses}
    }
}

export function getWitnessesFailure(error) {
    return {
        type : actions.GET_WITNESSES_FAILURE,
        payload : error
    }
}


//update
export function updateWitnessesRequest(witness) {
    return {
        type : actions.UPDATE_WITNESSES_REQUEST,
        payload : witness
    }
}

export function updateWitnessesSuccess(witness) {
    return {
        type : actions.UPDATE_WITNESSES_SUCCESS,
        payload : witness
    }
}

export function updateWitnessesFailure(error) {
    return {
        type : actions.UPDATE_WITNESSES_FAILURE,
        payload : error
    }
}


//delete
export function deleteWitnessesRequest(idWitness) {
    return {
        type : actions.DELETE_WITNESSES_REQUEST,
        payload : idWitness
    }
}

export function deleteWitnessesSuccess(idWitness) {
    return {
        type : actions.DELETE_WITNESSES_SUCCESS,
        payload : idWitness
    }
}

export function deleteWitnessesFailure(error) {
    return {
        type : actions.DELETE_WITNESSES_FAILURE,
        payload : error
    }
}

//add
export function addWitnessesRequest(witness) {
    return {
        type : actions.ADD_WITNESSES_REQUEST,
        payload : witness
    }
}

export function addWitnessesSuccess(witness) {
    return {
        type : actions.ADD_WITNESSES_SUCCESS,
        payload : witness
    }
}

export function addWitnessesFailure(error) {
    return {
        type : actions.ADD_WITNESSES_FAILURE,
        payload : error
    }
}
