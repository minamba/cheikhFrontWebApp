export const actionsMail = {
    SEND_SEMINAIRE_MAIL_REQUEST : "SEND_SEMINAIRE_MAIL_REQUEST",
    SEND_SEMINAIRE_MAIL_SUCCESS : "SEND_SEMINAIRE_MAIL_SUCCESS",
    SEND_SEMINAIRE_MAIL_FAILURE : "SEND_SEMINAIRE_MAIL_FAILURE",

    SEND_SEMINAIRE_MAIL_GROUP_REQUEST : "SEND_SEMINAIRE_MAIL_GROUP_REQUEST",
    SEND_SEMINAIRE_MAIL_GROUP_SUCCESS : "SEND_SEMINAIRE_MAIL_GROUP_SUCCESS",
    SEND_SEMINAIRE_MAIL_GROUP_FAILURE : "SEND_SEMINAIRE_MAIL_GROUP_FAILURE",


    SEND_PAYMENT_MAIL_REQUEST : "SEND_PAYMENT_MAIL_REQUEST",
    SEND_PAYMENT_MAIL_SUCCESS : "SEND_PAYMENT_MAIL_SUCCESS",
    SEND_PAYMENT_MAIL_FAILURE : "SEND_PAYMENT_MAIL_FAILURE",

    SEND_PAYMENT_MAIL_GROUP_REQUEST : "SEND_PAYMENT_MAIL_GROUP_REQUEST",
    SEND_PAYMENT_MAIL_GROUP_SUCCESS : "SEND_PAYMENT_MAIL_GROUP_SUCCESS",
    SEND_PAYMENT_MAIL_GROUP_FAILURE : "SEND_PAYMENT_MAIL_GROUP_FAILURE",
}

//SEMINAIRE

//send
export function sendMailRequest(recipient) {
    return {
        type : actionsMail.SEND_SEMINAIRE_MAIL_REQUEST,
        payload : recipient
    }
}

export function sendMailSuccess(recipient) {
    return {
        type : actionsMail.SEND_SEMINAIRE_MAIL_SUCCESS,
        payload : recipient
    }
}

export function sendMailFailure(error) {
    return {
        type : actionsMail.SEND_SEMINAIRE_MAIL_FAILURE,
        payload : error
    }
}

//send group
export function sendMailGroupRequest(recipientList) {
    return {
        type : actionsMail.SEND_SEMINAIRE_MAIL_GROUP_REQUEST,
        payload : recipientList
    }
}

export function sendMailGroupSuccess(recipientList) {
    return {
        type : actionsMail.SEND_SEMINAIRE_MAIL_GROUP_SUCCESS,
        payload : recipientList
    }
}

export function sendMailGroupFailure(error) {
    return {
        type : actionsMail.SEND_SEMINAIRE_MAIL_GROUP_FAILURE,
        payload : error
    }
}

//PAYMENT
//send
export function sendPaymentMailRequest(recipient) {
    return {
        type : actionsMail.SEND_PAYMENT_MAIL_REQUEST,
        payload : recipient
    }
}

export function sendPaymentMailSuccess(recipient) {
    return {
        type : actionsMail.SEND_PAYMENT_MAIL_SUCCESS,
        payload : recipient
    }
}

export function sendPaymentMailFailure(error) {
    return {
        type : actionsMail.SEND_PAYMENT_MAIL_FAILURE,
        payload : error
    }
}

//send group
export function sendPaymentMailGroupRequest(recipientList) {
    return {
        type : actionsMail.SEND_PAYMENT_MAIL_GROUP_REQUEST,
        payload : recipientList
    }
}

export function sendPaymentMailGroupSuccess(recipientList) {
    return {
        type : actionsMail.SEND_PAYMENT_MAIL_GROUP_SUCCESS,
        payload : recipientList
    }
}

export function sendPaymentMailGroupFailure(error) {
    return {
        type : actionsMail.SEND_PAYMENT_MAIL_GROUP_FAILURE,
        payload : error
    }
}


