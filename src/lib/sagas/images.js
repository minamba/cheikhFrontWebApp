import {takeEvery,takeLatest, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/ImageActions';
import * as api from '../api/images';
import localStorageService from '../storage/storageService';

function* getImages() {
    try {
        const response = yield call(api.getImages);
        //console.log("je rentre dans le getImages", response);

        //sauvegarde dans le localStorage
        localStorageService.save("images", response.data);
        yield put(actions.getImagesSuccess({images : response.data}));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* addImages(action) {
    try {
        //console.log("je rentre dans le addImages", action.payload);
        const response = yield call(api.addImage,action.payload);

        //sauvegarde dans le localStorage
        localStorageService.save("images", response.data);
        yield put(actions.addImagesSuccess({image : response.data}));
    } catch (error) {
        yield put(actions.addImagesFailure({error : error.response.data}));
    }
}

function* updateImage(action) {
    try {
        //console.log("je rentre dans le updateImage", action.payload);
        yield call(api.updateImage,action.payload);

        //je rappel getSeminaire pour la mise à jour du store
        const response = yield call(api.getImages);

        //sauvegarde dans le localStorage
        localStorageService.save("images", response.data);
        yield put(actions.getImagesSuccess({ image: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* deleteImage(action) {
    try {
        //console.log("je rentre dans le deleteImage", action.payload);
        yield call(api.deleteImage,action.payload);
        
        //je rappel getSeminaire pour la mise à jour du store
        const response = yield call(api.getImages);

        //sauvegarde dans le localStorage
        localStorageService.save("images", response.data);
        yield put(actions.getImagesSuccess({ image: response.data }));
    } catch (error) {
        yield put(actions.getImagesFailure({ error : error.response.data }));   
    }
}


function* watchGetImagesRequest() {
    yield takeEvery(actions.actions.GET_IMAGES_REQUEST,getImages);
}

function* watchAddImageRequest() {
    yield takeLatest(actions.actions.ADD_IMAGES_REQUEST,addImages);
}

function* watchUpdateImageRequest() {
    yield takeLatest(actions.actions.UPDATE_IMAGES_REQUEST,updateImage);
}

function* watchDeleteImageRequest() {
    yield takeLatest(actions.actions.DELETE_IMAGES_REQUEST,deleteImage);
}


const imagesSagas = [
    fork(watchGetImagesRequest),
    fork(watchAddImageRequest),
    fork(watchUpdateImageRequest),
    fork(watchDeleteImageRequest)
];

export default imagesSagas;