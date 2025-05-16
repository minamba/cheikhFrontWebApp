export const actionsStripe = {
    SEND_STRIPE_REQUEST : "SEND_STRIPE_REQUEST",
    SEND_STRIPE_SUCCESS : "SEND_STRIPE_SUCCESS",
    SEND_STRIPE_FAILURE : "SEND_STRIPE_FAILURE",
}

//send
export function sendStripeRequest(PaymentData) {
    return {
        type : actionsStripe.SEND_STRIPE_REQUEST,
        payload : PaymentData
    }
}

export function sendStripeSuccess(PaymentData) {
    return {
        type : actionsStripe.SEND_STRIPE_SUCCESS,
        payload : PaymentData
    }
}

export function sendStripeFailure(error) {
    return {
        type : actionsStripe.SEND_STRIPE_FAILURE,
        payload : error
    }
}


