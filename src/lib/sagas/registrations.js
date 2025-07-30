import {takeEvery,takeLatest, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/RegistrationActions';
import * as api from '../api/registrations';
import localStorageService from '../storage/storageService';


function* getRegistrations() {
    try {
        const response = yield call(api.getRegistrations);

        //sauvegarde dans le localStorage
        localStorageService.save("registrations", response.data);
        //console.log("je rentre dans le getRegistration", response);
        yield put(actions.getRegistrationsSuccess({ registrations : response.data}));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}


function* addRegistrations(action) {
    try {
      yield call(api.addRegistration, action.payload);
  
      const response = yield call(api.getRegistrations);
      localStorageService.save("registrations", response.data);
  
      yield put(actions.getRegistrationsSuccess({ registrations: response.data }));
      yield put({ type: actions.actions.ADD_REGISTRATION_SUCCESS, payload: { registration: action.payload } });
      yield put({ type: 'SHOW_SUCCESS_POPUP' });
    } catch (error) {
      console.error("Erreur addRegistration :", error);
      yield put(actions.addRegistrationFailure({ error: error.response?.data || "Erreur inconnue" }));
      yield put({ type: 'SHOW_ERROR_POPUP' });
    }
  }
  

function* updateRegistrations(action) {
    try {
        //console.log("je rentre dans le updateRegistration", action.payload);
        yield call(api.updateRegistration(action.payload));

        //je rappel getRegistration pour la mise à jour du store
        const response = yield call(api.getRegistrations);

        //sauvegarde dans le localStorage
        localStorageService.save("registrations", response.data);
        yield put(actions.getRegistrationsSuccess({ registrations: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* deleteRegistrations(action) {
    try {
        //console.log("je rentre dans le deleteRegistration", action.payload);
        yield call(api.deleteRegistration(action.payload));
        
        //je rappel getRegistration pour la mise à jour du store
        const response = yield call(api.getRegistrations);

        //sauvegarde dans le localStorage
        localStorageService.save("registrations", response.data);
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