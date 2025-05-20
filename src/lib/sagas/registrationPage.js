import { takeEvery, takeLatest, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/RegistrationPageActions';
import * as api from '../api/registrationPage';
import localStorageService from '../storage/storageService';

function* getRegistrationPage() {
    try {
        const response = yield call(api.getRegistrationPage);
        console.log("je rentre dans le getRegistrationPage", response);

        // sauvegarde dans le localStorage
        localStorageService.save("registrationPage", response.data);
        yield put(actions.getRegistrationPageSuccess({ registrationPage : response.data}));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* updateRegistrationPage(action) {
    try {
        console.log("je rentre dans le updateRegistrationPage", action.payload);
        yield call(api.updateRegistrationPage,action.payload);

        //je rappel getRegistration pour la mise à jour du store
        const response = yield call(api.getRegistrationPage);

        // sauvegarde dans le localStorage
        localStorageService.save("registrationPage", response.data);
        yield put(actions.getRegistrationPageSuccess({ registrationPage: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* addRegistrationPage(action) {
    try {
        console.log("je rentre dans le addRegistrationPage", action.payload);
        yield call(api.addRegistrationPage,action.payload);

        //je rappel getRegistration pour la mise à jour du store
        const response = yield call(api.getRegistrationPage);

        // sauvegarde dans le localStorage
        localStorageService.save("registrationPage", response.data);
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

function* watchAddRegistrationPageRequest() {
    yield takeLatest(actions.actions.ADD_REGISTRATION_PAGE_REQUEST,addRegistrationPage);
}   

const registrationPageSagas = [
    fork(watchGetRegistrationPageRequest),
    fork(watchUpdateRegistrationPageRequest),
    fork(watchAddRegistrationPageRequest)
];

export default registrationPageSagas;
