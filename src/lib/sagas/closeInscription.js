import { takeEvery, takeLatest, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/CloseInscriptionActions';
import * as api from '../api/closeInscription';
import localStorageService from '../storage/storageService';

function* getCloseInscription() {
    try {
        const response = yield call(api.getCloseInscription);
        //console.log("je rentre dans le getCloseInscription", response);

        //sauvegarde dans le localStorage
        localStorageService.save("closeInscription", response.data);
        yield put(actions.getCloseInscriptionSuccess({ closeInscription : response.data}));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* updateCloseInscription(action) {
    try {
        //console.log("je rentre dans le updateCloseInscription", action.payload);
        yield call(api.updateCloseInscription,action.payload);

        //je rappel getCloseInscription pour la mise à jour du store
        const response = yield call(api.getCloseInscription);
        localStorageService.save("closeInscription", response.data);
        yield put(actions.getCloseInscriptionSuccess({ closeInscription: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_CLOSE_INSCRIPTION_FAILURE, payload: error});
    }
}

function* addCloseInscription(action) {
    try {
        console.log("je rentre dans le addCloseInscription", action.payload);
        yield call(api.addCloseInscription,action.payload);

        //je rappel getCloseInscription pour la mise à jour du store
        const response = yield call(api.getCloseInscription);
        localStorageService.save("closeInscription", response.data);
        yield put(actions.getCloseInscriptionSuccess({ closeInscription: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_CLOSE_INSCRIPTION_FAILURE, payload: error});
    }
}



function* watchGetCloseInscriptionRequest() {
    yield takeEvery(actions.actions.GET_CLOSE_INSCRIPTION_REQUEST,getCloseInscription);
}

function* watchUpdateCloseInscriptionRequest() {
    yield takeLatest(actions.actions.UPDATE_CLOSE_INSCRIPTION_REQUEST,updateCloseInscription);
}

function* watchAddCloseInscriptionRequest() {
    yield takeLatest(actions.actions.ADD_CLOSE_INSCRIPTION_REQUEST,addCloseInscription);
}

const closeInscriptionSagas = [
    fork(watchGetCloseInscriptionRequest),
    fork(watchUpdateCloseInscriptionRequest),
    fork(watchAddCloseInscriptionRequest)
];

export default closeInscriptionSagas;
