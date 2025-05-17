import { takeEvery, takeLatest, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/RegistrationPageActions';
import * as api from '../api/registrationPage';

function* getRegistrationPage() {
    try {
        const response = yield call(api.getRegistrationPage);
        //console.log("je rentre dans le getRegistrationPage", response);
        yield put(actions.getRegistrationPageSuccess({ registrationPage : response.data}));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* updateRegistrationPage(action) {
    try {
        //console.log("je rentre dans le updateRegistrationPage", action.payload);
        yield call(api.updateRegistrationPage(action.payload));

        //je rappel getRegistration pour la mise à jour du store
        const response = yield call(api.getRegistrationPage);
        yield put(actions.getRegistrationPageSuccess({ registrationPage: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}



function* watchGetRegistrationPageRequest() {
    yield takeEvery(actions.actions.GET_REGISTRATION_PAGE_REQUEST,getRegistrationPage);
}

function* watchUpdateRegistrationPageRequest() {
    yield takeLatest(actions.actions.UPDATE_REGISTRATION_PAGE_REQUEST,updateRegistrationPage);
}

const registrationPageSagas = [
    fork(watchGetRegistrationPageRequest),
    fork(watchUpdateRegistrationPageRequest)
];

export default registrationPageSagas;
