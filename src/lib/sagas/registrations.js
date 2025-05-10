import {takeEvery,takeLatest, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/RegistrationActions';
import * as api from '../api/registrations';


function* getRegistrations() {
    try {
        const response = yield call(api.getRegistrations);
        console.log("je rentre dans le getRegistration", response);
        yield put(actions.getRegistrationsSuccess({ registrations : response.data}));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}


function* addRegistrations(action) {
    try {
        console.log("je rentre dans le addRegistration", action.payload);
        yield call(api.addRegistration(action.payload));
        const response = yield call(api.getRegistrations);
        yield put(actions.getRegistrationsSuccess({ registrations: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* updateRegistrations(action) {
    try {
        console.log("je rentre dans le updateRegistration", action.payload);
        yield call(api.updateRegistration(action.payload));

        //je rappel getRegistration pour la mise à jour du store
        const response = yield call(api.getRegistrations);
        yield put(actions.getRegistrationsSuccess({ registrations: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* deleteRegistrations(action) {
    try {
        console.log("je rentre dans le deleteRegistration", action.payload);
        yield call(api.deleteRegistration(action.payload));
        
        //je rappel getRegistration pour la mise à jour du store
        const response = yield call(api.getRegistrations);
        yield put(actions.getRegistrationsSuccess({ registrations: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}


function* watchGetRegistrationsRequest() {
    yield takeEvery(actions.actions.GET_REGISTRATION_REQUEST,getRegistrations);
}

function* watchAddRegistrationsRequest() {
    yield takeLatest(actions.actions.ADD_REGISTRATION_REQUEST,addRegistrations);
}

function* watchUpdateRegistrationsRequest() {
    yield takeLatest(actions.actions.UPDATE_REGISTRATION_REQUEST,updateRegistrations);
}

function* watchDeleteRegistrationsRequest() {
    yield takeLatest(actions.actions.DELETE_REGISTRATION_REQUEST,deleteRegistrations);
}


const registrationsSagas = [
    fork(watchGetRegistrationsRequest),
    fork(watchAddRegistrationsRequest),
    fork(watchUpdateRegistrationsRequest),
    fork(watchDeleteRegistrationsRequest)
];

export default registrationsSagas;