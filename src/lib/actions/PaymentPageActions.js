
export const actions = {
    GET_PAYMENT_PAGE_REQUEST : "GET_PAYMENT_PAGE_REQUEST",
    GET_PAYMENT_PAGE_SUCCESS : "GET_PAYMENT_PAGE_SUCCESS",
    GET_PAYMENT_PAGE_FAILURE : "GET_PAYMENT_PAGE_FAILURE",

    UPDATE_PAYMENT_PAGE_REQUEST : "UPDATE_PAYMENT_PAGE_REQUEST",
    UPDATE_PAYMENT_PAGE_SUCCESS : "UPDATE_PAYMENT_PAGE_SUCCESS",
    UPDATE_PAYMENT_PAGE_FAILURE : "UPDATE_PAYMENT_PAGE_FAILURE",   
}


//get
export function getPaymentPageRequest() {
    return {
        type : actions.GET_PAYMENT_PAGE_REQUEST,
    }
}

export function getPaymentPageSuccess({paymentPage}) {
    return {
        type : actions.GET_PAYMENT_PAGE_SUCCESS,
        payload : {paymentPage}
    }
}

export function getPaymentPageFailure(error) {
    return {
        type : actions.GET_PAYMENT_PAGE_FAILURE,
        payload : error
    }
}


//update
export function updatePaymentPageRequest(paymentPage) {
    return {
        type : actions.UPDATE_PAYMENT_PAGE_REQUEST,
        payload : paymentPage
    }
}

export function updatePaymentPageSuccess(paymentPage) {
    return {
        type : actions.UPDATE_PAYMENT_PAGE_SUCCESS,
        payload : paymentPage
    }
}

export function updatePaymentPageFailure(error) {
    return {
        type : actions.UPDATE_PAYMENT_PAGE_FAILURE,
        payload : error
    }
}
