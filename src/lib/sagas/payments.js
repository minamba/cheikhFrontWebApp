import {takeEvery,takeLatest, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/PaymentActions';
import * as api from '../api/payments';


function* getPayments() {
    try {
        const response = yield call(api.getPayments);
        console.log("je rentre dans le getPayment", response);
        yield put(actions.getPaymentsSuccess({ payments : response.data}));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}


function* addPayment(action) {
    try {
        console.log("je rentre dans le addPayment", action.payload);
        yield call(api.addPayment(action.payload));
        //yield call(getRegistrations);
        //je rappel getRegistration pour la mise à jour du store
        const response = yield call(api.getPayments);
        yield put(actions.getPaymentsSuccess({ payments: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* updatePayment(action) {
    try {
        console.log("je rentre dans le updatePayment", action.payload);
        yield call(api.updatePayment(action.payload));

        //je rappel getPayment pour la mise à jour du store
        const response = yield call(api.getPayments);
        yield put(actions.getPaymentsSuccess({ payments: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* deletePayment(action) {
    try {
        console.log("je rentre dans le deletePayment", action.payload);
        yield call(api.deletePayment(action.payload));
        
        //je rappel getPayment pour la mise à jour du store
        const response = yield call(api.getPayments);
        yield put(actions.getPaymentsSuccess({ payments: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}


function* watchGetPaymentsRequest() {
    yield takeEvery(actions.actions.GET_PAYMENT_REQUEST,getPayments);
}

function* watchAddPaymentsRequest() {
    yield takeLatest(actions.actions.ADD_PAYMENT_REQUEST,addPayment);
}

function* watchUpdatePaymentsRequest() {
    yield takeLatest(actions.actions.UPDATE_PAYMENT_REQUEST,updatePayment);
}

function* watchDeletePaymentsRequest() {
    yield takeLatest(actions.actions.DELETE_PAYMENT_REQUEST,deletePayment);
}


const paymentsSagas = [
    fork(watchGetPaymentsRequest),
    fork(watchAddPaymentsRequest),
    fork(watchUpdatePaymentsRequest),
    fork(watchDeletePaymentsRequest)
];

export default paymentsSagas;