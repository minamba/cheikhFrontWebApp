export const actions = {
    GET_PAYMENT_REQUEST : "GET_PAYMENT_REQUEST",
    GET_PAYMENT_SUCCESS : "GET_PAYMENT_SUCCESS",
    GET_PAYMENT_FAILURE : "GET_PAYMENT_FAILURE",

    UPDATE_PAYMENT_REQUEST : "UPDATE_PAYMENT_REQUEST",
    UPDATE_PAYMENT_SUCCESS : "UPDATE_PAYMENT_SUCCESS",
    UPDATE_PAYMENT_FAILURE : "UPDATE_PAYMENT_FAILURE",

    DELETE_PAYMENT_REQUEST : "DELETE_PAYMENT_REQUEST",
    DELETE_PAYMENT_SUCCESS : "DELETE_PAYMENT_SUCCESS",
    DELETE_PAYMENT_FAILURE : "DELETE_PAYMENT_FAILURE",

    ADD_PAYMENT_REQUEST : "ADD_PAYMENT_REQUEST",
    ADD_PAYMENT_SUCCESS : "ADD_PAYMENT_SUCCESS",
    ADD_PAYMENT_FAILURE : "ADD_PAYMENT_FAILURE",
   
}


//get
export function getPaymentsRequest() {
    return {
        type : actions.GET_PAYMENT_REQUEST,
    }
}

export function getPaymentsSuccess({payments}) {
    return {
        type : actions.GET_PAYMENT_SUCCESS,
        payload : {payments}
    }
}

export function getPaymentsFailure(error) {
    return {
        type : actions.GET_PAYMENT_FAILURE,
        payload : error
    }
}


//update
export function updatePaymentRequest(payment) {
    return {
        type : actions.UPDATE_PAYMENT_REQUEST,
        payload : payment
    }
}

export function updatePaymentSuccess(payment) {
    return {
        type : actions.UPDATE_PAYMENT_SUCCESS,
        payload : payment
    }
}

export function updatePaymentFailure(error) {
    return {
        type : actions.UPDATE_PAYMENT_FAILURE,
        payload : error
    }
}


//delete
export function deletePaymentRequest(idPayment) {
    return {
        type : actions.DELETE_PAYMENT_REQUEST,
        payload : idPayment
    }
}

export function deletePaymentSuccess(idPayment) {
    return {
        type : actions.DELETE_PAYMENT_SUCCESS,
        payload : idPayment
    }
}

export function deletePaymentFailure(error) {
    return {
        type : actions.DELETE_PAYMENT_FAILURE,
        payload : error
    }
}

//add
export function addPaymentRequest(payment) {
    return {
        type : actions.ADD_PAYMENT_REQUEST,
        payload : payment
    }
}

export function addPaymentSuccess(payment) {
    return {
        type : actions.ADD_PAYMENT_SUCCESS,
        payload : payment
    }
}

export function addPaymentFailure(error) {
    return {
        type : actions.ADD_PAYMENT_FAILURE,
        payload : error
    }
}
