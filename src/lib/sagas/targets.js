import {takeEvery,takeLatest, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/TargetActions';
import * as api from '../api/targets';
import localStorageService from '../storage/storageService';


function* getTargets() {
    try {
        const response = yield call(api.getTargets);
        //console.log("je rentre dans le getTargets", response);

        //sauvegarde dans le localStorage
        localStorageService.save("targets", response.data);
        yield put(actions.getTargetsSuccess({targets : response.data}));
    } catch (error) {
        yield put(actions.getTargetsFailure({ error : error.response.data }));   
    }
}

function* addTarget(action) {
    try {
        //console.log("je rentre dans le addTarget", action.payload);
        const response = yield call(api.addTarget,action.payload);

        //sauvegarde dans le localStorage
        localStorageService.save("targets", response.data);
        yield put(actions.addTargetsSuccess({target : response.data}));
    } catch (error) {
        yield put(actions.addTargetsFailure({error : error.response.data}));
    }
}

function* updateTarget(action) {
    try {
        //console.log("je rentre dans le updateTarget", action.payload);
        yield call(api.updateTarget,action.payload);

        //je rappel getSeminaire pour la mise à jour du store
        const response = yield call(api.getTargets);

        //sauvegarde dans le localStorage
        localStorageService.save("targets", response.data);
        yield put(actions.getTargetsSuccess({ target: response.data }));
    } catch (error) {
        yield put(actions.getTargetsFailure({ error : error.response.data }));   
    }
}

function* deleteTarget(action) {
    try {
        //console.log("je rentre dans le deleteTarget", action.payload);
        yield call(api.deleteTarget,action.payload);
        
        //je rappel getSeminaire pour la mise à jour du store
        const response = yield call(api.getTargets);

        //sauvegarde dans le localStorage
        localStorageService.save("targets", response.data);
        yield put(actions.getTargetsSuccess({ target: response.data }));
    } catch (error) {
        yield put(actions.getTargetsFailure({ error : error.response.data }));   
    }
}


function* watchGetTargetsRequest() {
    yield takeEvery(actions.actions.GET_TARGETS_REQUEST,getTargets);
}

function* watchAddTargetRequest() {
    yield takeLatest(actions.actions.ADD_TARGETS_REQUEST,addTarget);
}

function* watchUpdateTargetRequest() {
    yield takeLatest(actions.actions.UPDATE_TARGETS_REQUEST,updateTarget);
}

function* watchDeleteTargetRequest() {
    yield takeLatest(actions.actions.DELETE_TARGETS_REQUEST,deleteTarget);
}


const targetsSagas = [
    fork(watchGetTargetsRequest),
    fork(watchAddTargetRequest),
    fork(watchUpdateTargetRequest),    
    fork(watchDeleteTargetRequest)
];

export default targetsSagas;