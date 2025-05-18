import {takeEvery,takeLatest, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/UploadActions';
import * as api from '../api/upload';
import localStorageService from '../storage/storageService';

function* postUpload(action) {
    try {
        //console.log("j'upload le fichier", action.payload);
        const response = yield call(api.uploadFile, action.payload);

        //sauvegarde dans le localStorage
        localStorageService.save("upload", response.data);
        yield put(actions.postUploadSuccess(response.data));
    } catch (error) {
        //console.log("Erreur attrapée dans la saga :", error.message);
        yield put(actions.postUploadFailure(error.message));
    }
}


function* watchPostUploadRequest() {
    yield takeLatest(actions.actions.POST_UPLOAD_REQUEST, postUpload);
}


const uploadSagas = [
    fork(watchPostUploadRequest)
];

export default uploadSagas;