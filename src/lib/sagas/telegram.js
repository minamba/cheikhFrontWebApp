import {takeEvery,takeLatest, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/TelegramActions';
import * as api from '../api/telegrams';


function* sendTelegramMessage(action) {
    try {
        console.log("j'envoie le message via le bot", action.payload);
        const response = yield call(api.sendMessage, action.payload);
        yield put({ type: actions.actionsTelegram.SEND_TELEGRAM_MESSAGE_SUCCESS, payload: response });
    } catch (error) {
        console.log("Erreur attrapée dans la saga :", error.message);
        yield put({ type: actions.actionsTelegram.SEND_TELEGRAM_MESSAGE_FAILURE, payload: error.message });
    }
}


function* watchSendTelegramMessageRequest() {
    yield takeLatest(actions.actionsTelegram.SEND_TELEGRAM_MESSAGE_REQUEST,sendTelegramMessage);
}


const telegramSagas = [
    fork(watchSendTelegramMessageRequest)
];

export default telegramSagas;