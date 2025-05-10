export const actionsTelegram = {
    SEND_TELEGRAM_MESSAGE_REQUEST : "SEND_TELEGRAM_MESSAGE_REQUEST",
    SEND_TELEGRAM_MESSAGE_SUCCESS : "SEND_TELEGRAM_MESSAGE_SUCCESS",
    SEND_TELEGRAM_MESSAGE_FAILURE : "SEND_TELEGRAM_MESSAGE_FAILURE",
}


//send
export function sendTelegramMessageRequest(message) {
    return {
        type : actionsTelegram.SEND_TELEGRAM_MESSAGE_REQUEST,
        payload : message
    }
}

export function sendTelegramMessageSuccess(message) {
    return {
        type : actionsTelegram.SEND_TELEGRAM_MESSAGE_SUCCESS,
        payload : message
    }
}

export function sendTelegramMessageFailure(error) {
    return {
        type : actionsTelegram.SEND_TELEGRAM_MESSAGE_FAILURE,
        payload : error
    }
}
