import {takeEvery,takeLatest, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/SeminaireActions';
import * as api from '../api/seminaires';


function* getSeminaires() {
    try {
        const response = yield call(api.getSeminaires);
        console.log("je rentre dans le getSeminaires", response);
        yield put(actions.getSeminairesSuccess({seminaires : response.data}));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* addSeminaire(action) {
    try {
        console.log("je rentre dans le addSeminaire", action.payload);
        yield call(api.addSeminaire(action.payload));
        //yield call(getRegistrations);
        //je rappel getRegistration pour la mise à jour du store
        const response = yield call(api.getSeminaires);
        yield put(actions.getSeminairesSuccess({ seminaires : response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* updateSeminaire(action) {
    try {
        console.log("je rentre dans le updateSeminaire", action.payload);
        yield call(api.updateSeminaire(action.payload));

        //je rappel getSeminaire pour la mise à jour du store
        const response = yield call(api.getSeminaires);
        yield put(actions.getSeminairesSuccess({ seminaires: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* deleteSeminaire(action) {
    try {
        console.log("je rentre dans le deleteSeminaire", action.payload);
        yield call(api.deleteSeminaire(action.payload));
        
        //je rappel getSeminaire pour la mise à jour du store
        const response = yield call(api.getSeminaires);
        yield put(actions.getSeminairesSuccess({ seminaires: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}


function* watchGetSeminairesRequest() {
    yield takeEvery(actions.actionsSeminaire.GET_SEMINAIRE_REQUEST,getSeminaires);
}

function* watchAddSeminaireRequest() {
    yield takeLatest(actions.actionsSeminaire.ADD_SEMINAIRE_REQUEST,addSeminaire);
}

function* watchUpdateSeminaireRequest() {
    yield takeLatest(actions.actionsSeminaire.UPDATE_SEMINAIRE_REQUEST,updateSeminaire);
}

function* watchDeleteSeminaireRequest() {
    yield takeLatest(actions.actionsSeminaire.DELETE_SEMINAIRE_REQUEST,deleteSeminaire);
}


const seminairesSagas = [
    fork(watchGetSeminairesRequest),
    fork(watchAddSeminaireRequest),
    fork(watchUpdateSeminaireRequest),
    fork(watchDeleteSeminaireRequest)
];

export default seminairesSagas;