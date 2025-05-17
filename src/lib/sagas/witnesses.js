import {takeEvery,takeLatest, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/WitnessActions';
import * as api from '../api/witnesses';


function* getWitnesses() {
    try {
        const response = yield call(api.getWitnesses);
        //console.log("je rentre dans le getWitnesses", response);
        yield put(actions.getWitnessesSuccess({witnesses : response.data}));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* addWitnesses(action) {
    try {
        //console.log("je rentre dans le addWitnesses", action.payload);
        const response = yield call(api.addWitness,action.payload);
        yield put(actions.addWitnessesSuccess({witness : response.data}));
    } catch (error) {
        yield put(actions.addWitnessesFailure({error : error.response.data}));
    }
}

function* updateWitness(action) {
    try {
        //console.log("je rentre dans le updateWitness", action.payload);
        yield call(api.updateWitness(action.payload));

        //je rappel getSeminaire pour la mise à jour du store
        const response = yield call(api.getWitnesses);
        yield put(actions.getWitnessesSuccess({ witness: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* deleteWitness(action) {
    try {
        //console.log("je rentre dans le deleteWitness", action.payload);
        yield call(api.deleteWitness(action.payload));
        
        //je rappel getSeminaire pour la mise à jour du store
        const response = yield call(api.getWitnesses);
        yield put(actions.getWitnessesSuccess({ witness: response.data }));
    } catch (error) {
        yield put(actions.getWitnessesFailure({ error : error.response.data }));   
    }
}


function* watchGetWitnessesRequest() {
    yield takeEvery(actions.actions.GET_WITNESSES_REQUEST,getWitnesses);
}

function* watchAddWitnessRequest() {
    yield takeLatest(actions.actions.ADD_WITNESSES_REQUEST,addWitnesses);
}

function* watchUpdateWitnessRequest() {
    yield takeLatest(actions.actions.UPDATE_WITNESSES_REQUEST,updateWitness);
}

function* watchDeleteWitnessRequest() {
    yield takeLatest(actions.actions.DELETE_WITNESSES_REQUEST,deleteWitness);
}


const witnessesSagas = [
    fork(watchGetWitnessesRequest),
    fork(watchAddWitnessRequest),
    fork(watchUpdateWitnessRequest),
    fork(watchDeleteWitnessRequest)
];

export default witnessesSagas;