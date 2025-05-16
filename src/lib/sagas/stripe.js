import {takeEvery,takeLatest, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/stripeActions';
import * as api from '../api/stripe';


//Send request to pay
function* sendStripePayment(action) {
    try {
        console.log("CE QUE J'ENVOIE A STRIPE", action.payload);
        const response = yield call(api.sendStripePayment, action.payload);
        yield put({ type: actions.actionsStripe.SEND_STRIPE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: actions.actionsStripe.SEND_STRIPE_FAILURE, payload: error.message });
    }
}


function* watchSendStripePaymentRequest() {
    yield takeLatest(actions.actionsStripe.SEND_STRIPE_REQUEST,sendStripePayment);
}


const stripeSagas = [
    fork(watchSendStripePaymentRequest),
];

export default stripeSagas;