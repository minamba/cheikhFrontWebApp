import {takeEvery,takeLatest, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/MailActions';
import * as api from '../api/mails';


//SEMINAIRE
function* sendSeminaireMail(action) {
    try {
        //console.log("je rentre dans l'envoie de mail pour le seminaire", action.payload);
        const response = yield call(api.sendSeminaireMail, action.payload);
        yield put({ type: actions.actionsMail.SEND_SEMINAIRE_MAIL_SUCCESS, payload: response });
    } catch (error) {
        console.log("Erreur attrapée dans la saga :", error.message);
        yield put({ type: actions.actionsMail.SEND_SEMINAIRE_MAIL_FAILURE, payload: error.message });
    }
}

function* sendSeminaireMailGroup(action) {
    try {
        //console.log("je rentre dans l'envoie de mail group pour le seminaire", action.payload);
        const response = yield call(api.sendSeminaireMailGroup, action.payload);
        yield put({ type: actions.actionsMail.SEND_SEMINAIRE_MAIL_GROUP_SUCCESS, payload: response });
    } catch (error) {
        console.log("Erreur attrapée dans la saga :", error.message);
        yield put({ type: actions.actionsMail.SEND_SEMINAIRE_MAIL_GROUP_FAILURE, payload: error.message });
    }
}

//PAYMENT
function* sendPaymentMail(action) {
    try {
        //console.log("je rentre dans l'envoie de mail pour le paiement", action.payload);
        const response = yield call(api.sendPaymentMail, action.payload);
        yield put({ type: actions.actionsMail.SEND_PAYMENT_MAIL_SUCCESS, payload: response });
    } catch (error) {
        console.log("Erreur attrapée dans la saga :", error.message);
        yield put({ type: actions.actionsMail.SEND_PAYMENT_MAIL_FAILURE, payload: error.message });
    }
}

function* sendPaymentMailGroup(action) {
    try {
        //console.log("je rentre dans l'envoie de mail group pour le paiement", action.payload);
        const response = yield call(api.sendPaymentMailGroup, action.payload);
        yield put({ type: actions.actionsMail.SEND_PAYMENT_MAIL_GROUP_SUCCESS, payload: response });
    } catch (error) {
        console.log("Erreur attrapée dans la saga :", error.message);
        yield put({ type: actions.actionsMail.SEND_PAYMENT_MAIL_GROUP_FAILURE, payload: error.message });
    }
}


function* watchSendSeminaireMailRequest() {
    yield takeLatest(actions.actionsMail.SEND_SEMINAIRE_MAIL_REQUEST,sendSeminaireMail);
}

function* watchSendSeminaireMailGroupRequest() {
    yield takeLatest(actions.actionsMail.SEND_SEMINAIRE_MAIL_GROUP_REQUEST,sendSeminaireMailGroup);
}

function* watchSendPaymentMailRequest() {
    yield takeLatest(actions.actionsMail.SEND_PAYMENT_MAIL_REQUEST,sendPaymentMail);
}

function* watchSendPaymentMailGroupRequest() {
    yield takeLatest(actions.actionsMail.SEND_PAYMENT_MAIL_GROUP_REQUEST,sendPaymentMailGroup);
}


const mailSagas = [
    fork(watchSendSeminaireMailRequest),
    fork(watchSendSeminaireMailGroupRequest),
    fork(watchSendPaymentMailRequest),
    fork(watchSendPaymentMailGroupRequest)
];

export default mailSagas;