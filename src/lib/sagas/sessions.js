import {takeEvery,takeLatest, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/SessionActions';
import * as api from '../api/sessions';
import localStorageService from '../storage/storageService';


function* getSessions() {
    try {
        const response = yield call(api.getSessions);
        //console.log("je rentre dans le getSessions", response);

        //sauvegarde dans le localStorage
        localStorageService.save("sessions", response.data);
        yield put(actions.getSessionsSuccess({sessions : response.data}));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* addSessions(action) {
    try {
        //console.log("je rentre dans le addSessions", action.payload);
        const response = yield call(api.addSession,action.payload);

        //sauvegarde dans le localStorage
        localStorageService.save("sessions", response.data);
        yield put(actions.addSessionsSuccess({session : response.data}));
    } catch (error) {
        yield put(actions.addSessionsFailure({error : error.response.data}));
    }
}

function* updateSession(action) {
    try {
       // console.log("je rentre dans le updateSession", action.payload);
        yield call(api.updateSession,action.payload);

        //je rappel getSeminaire pour la mise à jour du store
        const response = yield call(api.getSessions);

        //sauvegarde dans le localStorage
        localStorageService.save("sessions", response.data);
        yield put(actions.getSessionsSuccess({ session: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* deleteSession(action) {
    try {
        //console.log("je rentre dans le deleteSession", action.payload);
        yield call(api.deleteSession,action.payload);
        
        //je rappel getSeminaire pour la mise à jour du store
        const response = yield call(api.getSessions);

        //sauvegarde dans le localStorage
        localStorageService.save("sessions", response.data);
        yield put(actions.getSessionsSuccess({ session: response.data }));
    } catch (error) {
        yield put(actions.getSessionsFailure({ error : error.response.data }));   
    }
}


function* watchGetSessionsRequest() {
    yield takeEvery(actions.actions.GET_SESSIONS_REQUEST,getSessions);
}

function* watchAddSessionRequest() {
    yield takeLatest(actions.actions.ADD_SESSIONS_REQUEST,addSessions);
}

function* watchUpdateSessionRequest() {
    yield takeLatest(actions.actions.UPDATE_SESSIONS_REQUEST,updateSession);
}

function* watchDeleteSessionRequest() {
    yield takeLatest(actions.actions.DELETE_SESSIONS_REQUEST,deleteSession);
}


const sessionsSagas = [
    fork(watchGetSessionsRequest),
    fork(watchAddSessionRequest),
    fork(watchUpdateSessionRequest),
    fork(watchDeleteSessionRequest)
];

export default sessionsSagas;