import { takeEvery, takeLatest, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/PaymentPageActions';
import * as api from '../api/paymentpage';
import localStorageService from '../storage/storageService';

function* getPaymentPage() {
    try {
        const response = yield call(api.getPaymentPage);

        //sauvegarde dans le localStorage
        localStorageService.save("paymentPage", response.data);
       // console.log("je rentre dans le getPaymentPage", response);
        yield put(actions.getPaymentPageSuccess({ paymentPage : response.data}));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* updatePaymentPage(action) {
    try {
        //console.log("je rentre dans le updatePaymentPage", action.payload);
        yield call(api.updatePaymentPage,action.payload);

        //je rappel getPaymentPage pour la mise à jour du store
        const response = yield call(api.getPaymentPage);

        //sauvegarde dans le localStorage
        localStorageService.save("paymentPage", response.data);
        yield put(actions.getPaymentPageSuccess({ paymentPage: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_CLOSE_INSCRIPTION_FAILURE, payload: error});
    }
}

function* addPaymentPage(action) {
    try {
        //console.log("je rentre dans le addPaymentPage", action.payload);
        yield call(api.addPaymentPage,action.payload);

        //je rappel getPaymentPage pour la mise à jour du store
        const response = yield call(api.getPaymentPage);

        //sauvegarde dans le localStorage
        localStorageService.save("paymentPage", response.data);
        yield put(actions.getPaymentPageSuccess({ paymentPage: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_CLOSE_INSCRIPTION_FAILURE, payload: error});
    }
}



function* watchGetPaymentPageRequest() {
    yield takeEvery(actions.actions.GET_PAYMENT_PAGE_REQUEST,getPaymentPage);
}

function* watchUpdatePaymentPageRequest() {
    yield takeLatest(actions.actions.UPDATE_PAYMENT_PAGE_REQUEST,updatePaymentPage);
}

function* watchAddPaymentPageRequest() {
    yield takeLatest(actions.actions.ADD_PAYMENT_PAGE_REQUEST,addPaymentPage);
}

const paymentPageSagas = [
    fork(watchGetPaymentPageRequest),
    fork(watchUpdatePaymentPageRequest),
    fork(watchAddPaymentPageRequest)
];

export default paymentPageSagas;
