import {takeEvery,takeLatest, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/MediaActions';
import * as api from '../api/medias';


function* getMedias() {
    try {
        const response = yield call(api.getMedias);
        console.log("je rentre dans le getMedias", response);
        yield put(actions.getMediasSuccess({medias : response.data}));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* addMedias(action) {
    try {
        console.log("je rentre dans le addMedias", action.payload);
        const response = yield call(api.addMedia,action.payload);
        yield put(actions.addMediasSuccess({media : response.data}));
    } catch (error) {
        yield put(actions.addMediasFailure({error : error.response.data}));
    }
}

function* updateMedia(action) {
    try {
        console.log("je rentre dans le updateMedia", action.payload);
        yield call(api.updateMedia(action.payload));

        //je rappel getSeminaire pour la mise à jour du store
        const response = yield call(api.getMedias);
        yield put(actions.updateMediasRequest({ medias: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* deleteMedia(action) {
    try {
        console.log("je rentre dans le deleteMedia", action.payload);
        yield call(api.deleteMedia(action.payload));
        
        //je rappel getSeminaire pour la mise à jour du store
        const response = yield call(api.getMedias);
        yield put(actions.getMediasSuccess({ medias: response.data }));
    } catch (error) {
        yield put(actions.addMediasFailure({ error : error.response.data }));   
    }
}


function* watchGetMediasRequest() {
    yield takeEvery(actions.actions.GET_MEDIAS_REQUEST,getMedias);
}

function* watchAddMediaRequest() {
    yield takeLatest(actions.actions.ADD_MEDIAS_REQUEST,addMedias);
}

function* watchUpdateMediaRequest() {
    yield takeLatest(actions.actions.UPDATE_MEDIAS_REQUEST,updateMedia);
}

function* watchDeleteMediaRequest() {
    yield takeLatest(actions.actions.DELETE_MEDIAS_REQUEST,deleteMedia);
}


const mediasSagas = [
    fork(watchGetMediasRequest),
    fork(watchAddMediaRequest),
    fork(watchUpdateMediaRequest),
    fork(watchDeleteMediaRequest)
];

export default mediasSagas;